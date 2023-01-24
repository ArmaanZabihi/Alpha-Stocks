const router = require('express').Router();

const apiRoutes = require('./api');
const homeRoutes = require('./home-routes.js');
const stockRoutes = require('./stocks.js')

router.use('/', homeRoutes);
router.use('/stocks', stockRoutes)
router.use('/api', apiRoutes);

module.exports = router;
