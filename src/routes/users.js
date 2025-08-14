const express = require('express');
const router = express.Router();

const userControllers = require('../controllers/users.js');

router.get('/', userControllers.getAllUsers);

router.post('/', userControllers.createUser );

module.exports = router;
