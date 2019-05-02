exports.seed = function(knex, Promise) {
  // Inserts seed entries
  return knex('ingredients').insert([
    {name: 'flour'},//1
    {name: 'eggs'},//2
    {name: 'water'},//3
    {name: 'salt'},//4
    {name: 'tomato sauce'},//5
    {name: 'flank steak'},//6
    {name: 'pork tenderloin'},//7
    {name: 'pepper'},//8
    {name: 'Russet potatoes'},//9
    {name: 'garlic'},//10
    {name: 'oil'},//11
    {name: 'mozzarella cheese'}, //12
    {name: 'bourbon'}, //13
    {name: 'brown sugar'}, //14
    {name: 'liquid smoke'} //15
   
  ]);
};