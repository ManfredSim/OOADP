const Sequelize = require('sequelize');
const db = require('../config/DBConfig');

const User = db.define('user', {
    registrationDate: {
        type: Sequelize.DATE
    },
    name: {
        type: Sequelize.STRING
    },
    nric: {
        type: Sequelize.STRING
    },
    sex: {
        type: Sequelize.STRING
    },
    dateOfBirth: {
        type: Sequelize.DATE
    },
    age: {
        type: Sequelize.INTEGER
    },
    nationality: {
        type: Sequelize.STRING
    },
    religion: {
        type: Sequelize.STRING
    },
    address: {
        type: Sequelize.STRING
    },
    homeNumber: {
        type: Sequelize.INTEGER
    },
    cellNumber: {
        type: Sequelize.INTEGER
    },
    payment_method: {
        type: Sequelize.STRING
    }
});
module.exports = User;