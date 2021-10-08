const express = require('express');

const router = express.Router();

router.route('/').get(() =>{console.log('Get exitoso')});

module.exports = router;