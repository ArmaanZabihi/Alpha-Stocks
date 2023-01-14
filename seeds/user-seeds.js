const { User } = require('../models');

const userData = [
  {
    username: 'john',
    password: 'pass1',
  },
  {
    username: 'eric',
    password: 'pass2',
  },
  {
    username: 'kevin',
    password: 'pass3',
  },
];

const userLists = () => User.bulkCreate(userData);

module.exports = userLists;
