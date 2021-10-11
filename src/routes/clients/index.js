const express = require('express');
const controller = require('../../controllers/clients') // controller es controladora

const router = express.Router();

router.route('/').get(controller.getClients); 
router.route('/').post(controller.addClient); 

module.exports = router;