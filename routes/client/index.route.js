const tourRoute= require('./tour.route')
const router = require('express').Router()
const homeRoute = require('./home.route')

router.use('/', homeRoute)
router.use('/tours', tourRoute) // use để sử dụng các route trong tour.route.js, './tour' là đường dẫn của route, tourRoute là đối tượng router được xuất ra từ tour.route.js
module.exports = router