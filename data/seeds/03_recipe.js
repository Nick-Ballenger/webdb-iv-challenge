
exports.seed = function(knex, Promise) {
  // Inserts seed entries
  return knex('recipes').insert([
    {name: 'New York style pizza', instructions: 'Make the dough, let it sit, make the sauce, spin out dough, add sauce, add cheese, bake in a woodfire oven until done.', dish_id: 1},
    {name: 'Chicago pizza', instructions: 'Make the dough, let it sit, make the sauce, spin out dough, add sauce, add cheese, bake in a woodfire oven until done.', dish_id: 1},
    {name: 'Bourbon Burger', instructions: 'Grind a 70/30 mix of flank steak and pork tenderloin and form into patties. Refrigerate patties for 2 hours. In a large bowl mix together bourbon, tomato paste, liquid smoke, brown sugar, salt, pepper, and garlic. Mix vigorously. In a medium sauce pot add sauce and water, bring up to a simmer and let it sit until burger is finished cooking. Grill burger, add sauce. ', dish_id:2 },
    {name: 'Crispy Idaho', instructions: 'Cut Idaho Russets into fry shaped pieces, wash off excess starch under water, dry off potatoes with dish towel, fry 2-5 minutes or until desired crispiness is achieved', dish_id: 3},
  ]);
};