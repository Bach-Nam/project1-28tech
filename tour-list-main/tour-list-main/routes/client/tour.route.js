const router = require('express').Router(); // This is because app is defined in the index.js file so we use function Router to handle it (replace app by router)

const tourController = require("../../controllers/client/tour.controller");

router.get('/', tourController.list); // this is /tours but we have a index.route file (parent file router) so this becomes child
router.get('/detail', tourController.detail); // create a new link route to the /tours/detail 

module.exports = router;