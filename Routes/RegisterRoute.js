const { Register, getUsers, deleteUser } = require('../Controller/RegisterController');

const router = require('express').Router();



router.post('/register', Register);
router.get('/users', getUsers);
router.delete('/users/:id', deleteUser);


module.exports = router;