const { ListStock } = require('../models');

const listStockData = [
  {
    list_id: 1,
    stock_id: 4,
  },
  {
    list_id: 1,
    stock_id: 7,
  },
  {
    list_id: 1,
    stock_id: 8,
  },
  {
    list_id: 2,
    stock_id: 1,
  },
  {
    list_id: 2,
    stock_id: 8,
  },
  {
    list_id: 3,
    stock_id: 3,
  },
  {
    list_id: 3,
    stock_id: 4,
  },
  {
    list_id: 3,
    stock_id: 5,
  },
  {
    list_id: 4,
    stock_id: 1,
  },
  {
    list_id: 4,
    stock_id: 2,
  },
  {
    list_id: 4,
    stock_id: 4,
  },
  {
    list_id: 4,
    stock_id: 5,
  },
  {
    list_id: 4,
    stock_id: 8,
  },
  {
    list_id: 5,
    stock_id: 6,
  },
  {
    list_id: 5,
    stock_id: 7,
  },
  
];

const seedListStocks = () => ListStock.bulkCreate(listStockData);

module.exports = seedListStocks;
