const router = require('express').Router();
const { User } = require('../models');
// const withAuth = require('../utils/auth');

var handlebars = require('handlebars');
handlebars.registerHelper("loggedIn", function(varName, varValue, options) {
  options.data.root[varName] = varValue;
});

router.get('/', async (req, res) => {
  try {
    res.render('homepage', {
      loggedIn: req.session.loggedIn,
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