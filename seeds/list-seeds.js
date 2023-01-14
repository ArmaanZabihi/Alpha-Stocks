const { List } = require('../models');

const listData = [
  {
    list_name: 'john_list',
    user_id: 1,
  },
  {
    list_name: 'favorites',
    user_id: 1,
  },
  {
    list_name: 'my_list',
    user_id: 2,
  },
  {
    list_name: 'tech_list',
    user_id: 2,
  },
  {
    list_name: 'penny',
    user_id: 3,
  },
];

const seedLists = () => List.bulkCreate(listData);

module.exports = seedLists;
