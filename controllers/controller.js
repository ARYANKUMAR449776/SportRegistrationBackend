const userData = require('../models/models');

const registerUser = (req, res) => {
    const registration = {
        Id: req.body.Id,
        Name: req.body.Name,
        Address: req.body.Address,
        status: req.body.status,
        price: userData[`${req.body.status}`]
    };
    res.json(registration);
    }
    module.exports = {registerUser}