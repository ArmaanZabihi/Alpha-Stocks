const router = require('express').Router();
const stockRoutes = require('./stocks')

router.use('/stocks', stockRoutes)

module.exports = router;