const express = require('express');

const UsersController = require('../controller/users');

const router = express.Router();

router.get('/', UsersController.find);
router.get('/:id', UsersController.findUser);
router.post('/', UsersController.create);
router.patch('/:id', UsersController.update);
router.delete('/:id', UsersController.delete);

module.exports = router;

