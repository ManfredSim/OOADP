const Sequelize = require('sequelize');
const db = require('../config/DBConfig');

const BillPayment = db.define('bill', {
    prefix: {
        type: Sequelize.STRING
    },
    first_name: {
        type: Sequelize.STRING
    },
    last_name: {
        type: Sequelize.STRING
    },
    country: {
        type: Sequelize.STRING
    },
    nric: {
        type: Sequelize.STRING
    },
    email: {
        type: Sequelize.STRING
    },
    address: {
        type: Sequelize.STRING(2000)
    },
    contact_no: {
        type: Sequelize.INTEGER
    },
    payment_method: {
        type: Sequelize.STRING
    }
});
module.exports = BillPayment;