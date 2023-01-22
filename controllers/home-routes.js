const router = require('express').Router();
const { User } = require('../models');
const withAuth = require('../utils/auth');

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