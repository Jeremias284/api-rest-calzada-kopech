const express = require('express');
const controller = require('../../controllers/clients') // controller es controladora

const router = express.Router();

router.route('/').get(controller.getClients); 

module.exports = router;