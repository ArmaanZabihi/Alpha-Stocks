const { Stock } = require('../models');

const stockData = [
  {
    stock_symbol: 'AAPL',
  },
  {
    stock_symbol: 'TSM',
  },
  {
    stock_symbol: 'DIS',
  },
  {
    stock_symbol: 'CMCSA',
  },
  {
    stock_symbol: 'AMZN',
  },
  {
    stock_symbol: 'PYPL',
  },
  {
    stock_symbol: 'SHOP',
  },
  {
    stock_symbol: 'TSLA',
  },
];

const seedStocks = () => Stock.bulkCreate(stockData);

module.exports = seedStocks;
