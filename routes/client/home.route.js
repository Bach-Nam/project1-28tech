const homeController = require('../../controllers/client/home.controller')
const router = require("express").Router();


router.get('/', homeController.home );
module.exports = router;