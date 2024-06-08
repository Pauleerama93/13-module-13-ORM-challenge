const router = require('express').Router();
const { Category, Product } = require('../../../models');

// The `/api/categories` endpoint

router.get('/', async (req, res) => {
  // find all categories
  try{ 
    const categoryData = await Category.findAll({
      include: [Product]
    });
    if(!categoryData){
      res.status(400).json({message: "category not found"})
      return
    }
    res.status(200).json(categoryData)
  } catch (err) {
    res.status(500).json(err);
  }
});
  // be sure to include its associated Products (line 10)


router.get('/:id',async (req, res) => {
  // find one category by its `id` value
  try {
    const categoryData = await Category.findOne(req.params.id),{
      include: [{model: }]
    };
    res.status(200).json(locationData);
  } catch (err) {
    res.status(500).json(err);
  }
});
  // be sure to include its associated Products


router.post('/', async(req, res) => {
  // create a new category

});

router.put('/:id', (req, res) => {
  // update a category by its `id` value
});

router.delete('/:id', (req, res) => {
  // delete a category by its `id` value
});

module.exports = router;
