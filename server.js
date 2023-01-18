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
  

  // TODO: Slack the team, and see who will create a seed file. Because you want to test your routes.
  // TODO: Someone might be in charge of linting
  // TODO: Someone needs to make some middleware for withAuth