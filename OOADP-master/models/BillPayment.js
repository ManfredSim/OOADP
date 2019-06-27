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
        type: Sequelize.STRING
    },
    payment_method: {
        type: Sequelize.STRING
    },
    creditcardtype: {
        type: Sequelize.STRING
    },
    debitcardtype: {
        type: Sequelize.STRING
    },   
    accountNo: {
        type: Sequelize.STRING
    },
    payAmt: {
        type: Sequelize.STRING
    },
    cardNo: {
        type: Sequelize.STRING
    },
    cardExpiry: {
        type: Sequelize.STRING
    },
    cardVerify: {
        type: Sequelize.STRING
    }
});

module.exports = BillPayment;