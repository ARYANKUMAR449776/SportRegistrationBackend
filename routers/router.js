const express = require('express');
const router = express.Router();
const {registerUser} = require('../controllers/controller');

router.post('/register', registerUser);

router.all('*', (req, res, next) => {
    res.status(404).send(`404 Not Found`);
})

module.exports = router;