exports.seed = function(knex, Promise) {
  // Inserts seed entries
  return knex('recipe_ingredients').insert([
    {recipe_id: 1, ingredient_id: 1, quantity: '2 cups'},
    {recipe_id: 1, ingredient_id: 2, quantity: '3 '},
    {recipe_id: 1, ingredient_id: 3, quantity: '1/2 cup'},
    {recipe_id: 1, ingredient_id: 4, quantity: 'season to taset'},
    {recipe_id: 1, ingredient_id: 12, quantity: '1 bag'},
    {recipe_id: 1, ingredient_id: 5, quantity: '2 cans'},
    {recipe_id: 2, ingredient_id: 6, quantity: '3 lbs'},
    {recipe_id: 2, ingredient_id: 7, quantity: '1 lb'},
    {recipe_id: 2, ingredient_id: 5, quantity: '1 can'},
    {recipe_id: 2, ingredient_id: 14, quantity: '2 0z'},
    {recipe_id: 2, ingredient_id: 14, quantity: '1 cup'},
    {recipe_id: 2, ingredient_id: 8, quantity: 'season to taste'},
    {recipe_id: 2, ingredient_id: 10, quantity: '2 cloves'},
    {recipe_id: 3, ingredient_id: 9, quantity: '5'},
    {recipe_id: 3, ingredient_id: 11, quantity: '3 cups'},
    {recipe_id: 3, ingredient_id: 4, quantity: 'season to taste'},
   
  ]);
};