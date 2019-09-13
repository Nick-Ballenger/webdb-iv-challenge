exports.seed = function(knex, Promise) {
  // Inserts seed entries
  return knex('dish').insert([
    {name: 'Pizza'},
    {name: 'Hamburger'},
    {name: 'French Fries'}
  ]);
};