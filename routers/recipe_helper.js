const db = require('../data/dbconfig');

module.exports = {
  find,
  findById,
  add,
  update,
  remove,
};

function find(){
  return db('recipes')
            .join("dish", "recipes.dish_id", '=', "dish.id")
            .select("recipes.id", "recipes.name", { dish: "dish.name" })
}

function findById(id) {
    return db("recipes")
    .join('dish', "dish.id", "=", "recipes.dish_id")
    .join('recipe_ingredients', "recipes.id", "=", 'recipe_ingredients.recipe_id' )
    .join('ingredients','ingredients.id', "=", 'recipe_ingredients.ingredient_id' )
    .select('dish.dish_name','recipes.recipe_name','ingredients.ingredient_name','recipe_ingredients.quantity')
    .where({'recipes.dish_id':id})
}

function add(recipes) {
  return db('recipes')
    .insert(recipes, 'id')
    .then(([id]) => {
      return findById(id);
    });
}

function update(id, changes) {
  return db('recipes')
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
  return db('recipes')
    .where({ id })
    .del();
}
