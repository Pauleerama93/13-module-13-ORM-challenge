const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

router.get('/', async (req, res) => {
  // Find all categories
  try { 
    const categoryData = await Category.findAll({
      include: [Product]
    });
    if (!categoryData.length) {
      res.status(404).json({ message: "No categories found" });
      return;
    }
    res.status(200).json(categoryData);
  } catch (err) {
    res.status(500).json(err);
  }
  // Be sure to include its associated Products
});

router.get('/:id', async (req, res) => {
  // Find one category by its `id` value
  try {
    const categoryData = await Category.findOne({
      where: {
        id: req.params.id
      },
      include: [Product]
    });
    if (!categoryData) {
      res.status(404).json({ message: "Category not found with that id" });
      return;
    }
    res.status(200).json(categoryData);
  } catch (err) {
    res.status(500).json(err);
  }
  // Be sure to include its associated Products
});

router.post('/', async (req, res) => {
  // Create a new category
  try { 
    const newCategoryData = await Category.create(req.body);
    res.status(200).json(newCategoryData);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.put('/:id', async (req, res) => {
  // Update a category by its `id` value
  try { 
    const categoryData = await Category.update(req.body, {
      where: {
        id: req.params.id
      }
    });
    if (!categoryData[0]) {
      res.status(404).json({ message: "Category not found with that id" });
      return;
    }
    res.status(200).json({ message: "Category updated successfully" });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.delete('/:id', async (req, res) => {
  // Delete a category by its `id` value
  try { 
    const categoryData = await Category.destroy({
      where: {
        id: req.params.id
      }
    });
    if (!categoryData) {
      res.status(404).json({ message: "Category not found with that id" });
      return;
    }
    res.status(200).json({ message: `Deleted category with id ${req.params.id}` });
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;