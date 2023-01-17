const seedLists = require('./list-seeds');
const seedListStocks = require('./listStock-seeds');
const seedStocks = require('./stock-seeds');
const seedUsers = require('./user-seeds');

const sequelize = require('../config/connection');

const seedAll = async () => {
  await sequelize.sync({ force: true });
  console.log('\n----- DATABASE SYNCED -----\n');
  await seedUsers();
  console.log('\n----- USERS SEEDED -----\n');

  await seedLists();
  console.log('\n----- LISTS SEEDED -----\n');
  
  await seedStocks();
  console.log('\n----- STOCKS SEEDED -----\n');
  
  await seedListStocks();
  console.log('\n----- LIST STOCKS SEEDED -----\n');

  process.exit(0);
};

seedAll();
