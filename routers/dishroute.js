const router = require('express').Router();

const Dish = require('./dish_helper');

router.get('/', (req, res) => {
  Dish.find()
    .then(Dish => {
      res.status(200).json(Dish);
    })
    .catch(error => {
      res
        .status(500)
        .json({ message: 'We ran into an error retrieving the Dish' });
    });
});

router.get('/:id', async (req, res) => {
  try {
    const dish = await Dish.findById(req.params.id);
    if (dish) {
      res.status(200).json(dish);
    } else {
      res.status(404).json({ message: 'We could not find the dish' });
    }
  } catch (error) {
    res
      .status(500)
      .json({ message: 'We ran into an error retrieving the dish' });
  }
});

router.post('/', async (req, res) => {
  const dish = req.body;

  if (dish.name) {
    try {
      const inserted = await Dish.add(dish);
      res.status(201).json(inserted);
    } catch (error) {
      res
        .status(500)
        .json({ message: 'We ran into an error creating the dish' });
    }
  } else {
    res.status(400).json({ message: 'Please provide name of the dish' });
  }
});

router.put('/:id', async (req, res) => {
  const changes = req.body;

  if (changes.name) {
    try {
      const updated = await Dish.update(req.params.id, changes);
      if (updated) {
        res.status(200).json(updated);
      } else {
        res.status(404).json({
          message: 'That dish does not exist',
        });
      }
    } catch (error) {
      res
        .status(500)
        .json({ message: 'We ran into an error updating the dish' });
    }
  } else {
    res.status(400).json({
      message: 'Please provide the name of the dish',
    });
  }
});

router.delete('/:id', async (req, res) => {
  try {
    const count = await Dish.remove(req.params.id);
    if (count > 0) {
      res.status(204).end();
    } else {
      res.status(404).json({
        message: 'That dish does not exist, perhaps it was deleted already',
      });
    }
  } catch (error) {
    res
      .status(500)
      .json({ message: 'We ran into an error removing the dish' });
  }
});

module.exports = router;
