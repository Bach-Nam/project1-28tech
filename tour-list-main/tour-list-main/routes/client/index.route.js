// This is the biggest file router to store tabs (/tours/list/...)
const router = require('express').Router(); 
const homeRoutes = require("./home.route");
const tourRoutes = require("./tour.route");
const cartRoutes = require("./cart.route");

router.use('/', homeRoutes);
router.use('/tours', tourRoutes);
router.use('/cart', cartRoutes);

module.exports = router;

