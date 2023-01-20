const path = require('path');
const express = require('express');
const session = require('express-session');
const exphbs = require('express-handlebars');
const SequelizeStore = require('connect-session-sequelize')(session.Store);

const routes = require('./controllers');
const sequelize = require('./config/connection');
const helpers = require('./utils/helpers');

const app = express();
const PORT = process.env.PORT || 3001;

const sess = {
  secret: 'Super secret secret',
  cookie: {},
  resave: false,
  saveUninitialized: true,
  store: new SequelizeStore({
    db: sequelize,
  }),
};

app.use(session(sess));

const hbs = exphbs.create({ helpers });

app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

app.use(routes);

sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log('Now listening'));
});

// API Function that pulls the data response [Apple STOCK]
fetch(`https://www.alphavantage.co/query?function=TIME_SERIES_DAILY_ADJUSTED&symbol=AAPL&apikey=8CXNEA1SIH9L6U8N`)
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
fetch(`https://www.alphavantage.co/query?function=NEWS_SENTIMENT&tickers=AAPL&apikey=8CXNEA1SIH9L6U8N`)
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
fetch(`https://www.alphavantage.co/query?function=OVERVIEW&symbol=AAPL&apikey=8CXNEA1SIH9L6U8N`)
.then(function(response){
    return response.json();
})
.then(function (results) {git
    console.log(results);
})
.catch(function (error) {
    console.log(Error(error));
});
// Stocks List
fetch(`https://www.alphavantage.co/query?function=LISTING_STATUS&apikey=8CXNEA1SIH9L6U8N`)
.then(function(response){
    return response.json();
})
.then(function (results) {git
    console.log(results);
})
.catch(function (error) {
    console.log(Error(error));
});




//Gets all stocks for homepage
// const router = require('express'). Router();
// const {Folio,Stock} = require('../models');

// router.get('/', async (req, res) => {
//     try {
//       const dbStockData = await stock.findAll({
//         include: [
//           {
//             model: Folio,
//             attributes: ['filename', 'description'],
//           },
//         ],
//       });
  
//       const Stock = dbStockData.map((Stock) =>
//         gallery.get({ plain: true })
//       );
  
<<<<<<< HEAD
      res.render('homepage', {
        stocks,
        loggedIn: req.session.loggedIn,
      });
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  });
  

  // TODO: Slack the team, and see who will create a seed file. Because you want to test your routes.
  // TODO: Someone might be in charge of linting
  // TODO: Someone needs to make some middleware for withAuth
=======
//       res.render('homepage', {
//         stocks,
//         loggedIn: req.session.loggedIn,
//       });
//     } catch (err) {
//       console.log(err);
//       res.status(500).json(err);
//     }
//   });
  
>>>>>>> 7051be70a1a3b4394f62522ce959fe8536264c5a
