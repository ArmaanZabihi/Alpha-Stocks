const router = require('express').Router();

// const stockRoutes = require('./stocks')

// router.use('/stocks', stockRoutes)



const userRoutes = require('./userRoutes');

router.use('/users', userRoutes);

module.exports = router;

