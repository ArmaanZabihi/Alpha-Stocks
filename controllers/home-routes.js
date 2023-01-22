const router = require('express').Router();
const { User } = require('../models');
// const withAuth = require('../utils/auth');

var handlebars = require('handlebars');
handlebars.registerHelper("loggedIn", options => {
  Handlebars.logIn(options);

});

router.get('/', async (req, res) => {
  try {

    req.session.save(() => {
      // We set up a session variable to count the number of times we visit the homepage
      if (req.session.countVisit) {
        // If the 'countVisit' session variable already exists, increment it by 1
        req.session.countVisit++;
      } else {
        // If the 'countVisit' session variable doesn't exist, set it to 1
        req.session.countVisit = 1;
      }

    res.render('homepage', {
      loggedIn: req.session.loggedIn,
      // We send over the current 'countVisit' session variable to be rendered
      countVisit: req.session.countVisit,
    });
  }); 
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// GET one list
router.get('/list/:id', async (req, res) => {
  try {
    const dbListData = await List.findByPk(req.params.id, {
      include: [
        {
          model: ListStock,
          attributes: [
            'id',
            'list_id',
            'stock_id',
            'stock_symbol',
          ],
        },
      ],
    });

    const listStock = dbListData.get({ plain: true });
    // Send over the 'loggedIn' session variable to the 'gallery' template
    res.render('list', { list, loggedIn: req.session.loggedIn });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});


router.get('/login', (req, res) => {
    if (req.session.loggedIn) {
      res.redirect('/');
      return;
    }
  
    res.render('login');
});

router.get('/logout', (req, res) => {
  if (!req.session.loggedIn) {
    res.redirect('/');
    return;
  }

  res.render('logout');
});

module.exports = router;