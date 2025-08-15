const express = require('express');
const router = express.Router();

const userControllers = require('../controllers/users.js');

router.get('/', userControllers.getAllUsers);
router.post('/', userControllers.createNewUser );
router.patch('/:id', userControllers.updateUser);
router.delete('/:id', userControllers.deleteUser);

module.exports = router;
