const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint

// GET all tags
router.get('/', async (req, res) => {
  try {
    const tagData = await Tag.findAll({
      include: [{ model: Product, through: ProductTag }],
    });
    res.status(200).json(tagData);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// GET a single tag by its `id`
router.get('/:id', async (req, res) => {
  try {
    const tagData = await Tag.findByPk(req.params.id, {
      include: [{ model: Product, through: ProductTag }],
    });
    if (!tagData) {
      res.status(404).json({ message: 'Tag not found with that id' });
      return;
    }
    res.status(200).json(tagData);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// POST a new tag
router.post('/', async (req, res) => {
  try {
    const { tag_name, productIds } = req.body;

    const tag = await Tag.create({ tag_name });

    if (productIds && productIds.length) {
      const productTagIdArr = productIds.map((product_id) => {
        return {
          product_id,
          tag_id: tag.id,
        };
      });
      await ProductTag.bulkCreate(productTagIdArr);
    }
    res.status(201).json(tag);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// PUT update a tag's name by its `id` value
router.put('/:id', async (req, res) => {
  try {
    const { productIds, ...updateData } = req.body;

    const tag = await Tag.update(updateData, {
      where: {
        id: req.params.id,
      },
    });

    if (productIds && productIds.length) {
      const productTags = await ProductTag.findAll({ where: { tag_id: req.params.id } });

      const productTagIds = productTags.map(({ product_id }) => product_id);
      const newProductTags = productIds
        .filter((product_id) => !productTagIds.includes(product_id))
        .map((product_id) => {
          return {
            product_id,
            tag_id: req.params.id,
          };
        });
      const productTagsToRemove = productTags
        .filter(({ product_id }) => !productIds.includes(product_id))
        .map(({ id }) => id);

      await Promise.all([
        ProductTag.destroy({ where: { id: productTagsToRemove } }),
        ProductTag.bulkCreate(newProductTags),
      ]);
    }

    res.status(200).json({ message: 'Tag updated successfully' });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// DELETE a tag by its `id` value
router.delete('/:id', async (req, res) => {
  try {
    const tag = await Tag.destroy({
      where: {
        id: req.params.id,
      },
    });
    if (!tag) {
      res.status(404).json({ message: 'Tag not found with that id' });
      return;
    }
    res.status(200).json({ message: 'Tag deleted successfully' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;