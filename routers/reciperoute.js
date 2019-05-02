const router = require('express').Router();

const recipes = require('./recipe_helper');

router.get('/', (req, res) => {
  recipes.find()
    .then(recipes => {
      res.status(200).json(recipes);
    })
    .catch(error => {
      res
        .status(500)
        .json({ message: 'We ran into an error retrieving the recipes' });
    });
});

router.get('/:id', async (req, res) => {
  try {
    const recipes = await recipes.findById(req.params.id);
    if (recipes) {
      res.status(200).json(recipes);
    } else {
      res.status(404).json({ message: 'We could not find the recipes' });
    }
  } catch (error) {
    res
      .status(500)
      .json({ message: 'We ran into an error retrieving the recipes' });
  }
});

router.post('/', async (req, res) => {
  const recipes = req.body;

  if (recipes.name) {
    try {
      const inserted = await recipes.add(recipes);
      res.status(201).json(inserted);
    } catch (error) {
      res
        .status(500)
        .json({ message: 'We ran into an error creating the recipes' });
    }
  } else {
    res.status(400).json({ message: 'Please provide name of the recipes' });
  }
});

router.put('/:id', async (req, res) => {
  const changes = req.body;

  if (changes.name) {
    try {
      const updated = await recipes.update(req.params.id, changes);
      if (updated) {
        res.status(200).json(updated);
      } else {
        res.status(404).json({
          message: 'That recipes does not exist',
        });
      }
    } catch (error) {
      res
        .status(500)
        .json({ message: 'We ran into an error updating the recipes' });
    }
  } else {
    res.status(400).json({
      message: 'Please provide the name of the recipes',
    });
  }
});

router.delete('/:id', async (req, res) => {
  try {
    const count = await recipes.remove(req.params.id);
    if (count > 0) {
      res.status(204).end();
    } else {
      res.status(404).json({
        message: 'That recipes does not exist, perhaps it was deleted already',
      });
    }
  } catch (error) {
    res
      .status(500)
      .json({ message: 'We ran into an error removing the recipes' });
  }
});

module.exports = router;
