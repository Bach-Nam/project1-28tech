const router = require('express').Router();

const profileController = require("../../controllers/admin/profile.controller");

router.get('/change-password', profileController.changePassword)
router.get('/edit', profileController.edit)

module.exports = router;