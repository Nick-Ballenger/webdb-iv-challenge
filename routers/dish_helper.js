const db = require('../data/dbconfig');

module.exports = {
  find,
  findById,
  add,
  update,
  remove,
};


function find(id) {
  return db('dish');
}

function findById(id) {
  return db('dish')
    .where({ id })
    .first();
}

function add(dish) {
  return db('dish')
    .insert(dish, 'id')
    .then(([id]) => {
      return findById(id);
    });
}

function update(id, changes) {
  return db('dish')
    .where({ id })
    .update(changes)
    .then(count => {
      if (count > 0) {
        return findById(id);
      } else {
        return null;
      }
    });
}

function remove(id) {
  return db('dish')
    .where({ id })
    .del();
}
