//Gets all stocks for homepage
const router = require('express'). Router();
const {Folio,Stock} = require('../models');

router.get('/', async (req, res) => {
    try {
      const dbStockData = await stock.findAll({
        include: [
          {
            model: Folio,
            attributes: ['filename', 'description'],
          },
        ],
      });
  
      const Stock = dbStockData.map((Stock) =>
        gallery.get({ plain: true })
      );
  
      res.render('homepage', {
        stocks,
        loggedIn: req.session.loggedIn,
      });
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  });
  
// API Function that pulls the data response [Apple STOCK]
fetch("https://www.alphavantage.co/query?function=TIME_SERIES_DAILY_ADJUSTED&symbol=AAPL&apikey=8CXNEA1SIH9L6U8N")
.then(function(response){
    return response.json();
})
.then(function (results) {
    console.log(results);
})
.catch(function (error) {
    console.log(Error(error));
});

//API Function that pulls data for news sentiment for [APPLE STOCK]
fetch("https://www.alphavantage.co/query?function=NEWS_SENTIMENT&tickers=AAPL&apikey=8CXNEA1SIH9L6U8N")
.then(function(response){
    return response.json();
})
.then(function (results) {
    console.log(results);
})
.catch(function (error) {
    console.log(Error(error));
});

//API Function that pulls data for Company Overview for [APPLE STOCK]
fetch("https://www.alphavantage.co/query?function=OVERVIEW&symbol=AAPL&apikey=8CXNEA1SIH9L6U8N")
.then(function(response){
    return response.json();
})
.then(function (results) {git 
    console.log(results);
})
.catch(function (error) {
    console.log(Error(error));
});
