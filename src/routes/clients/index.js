const express = require('express');
const controller = require('../../controllers/clients') // controller es controladora

const router = express.Router();

//OBTIENE TODOS LOS CLIENTES
router.route('/').get(controller.getClients); 
//OBTIENE EL CLIENTE CON EL ID INDICADO
router.route('/').get(controller.getClientById);

//AGREGA CLIENTE
router.route('/').post(controller.addClient); 
//ELIMINA CLIENTE
router.route('/:clientId').delete(controller.deleteClientById); 

module.exports = router;