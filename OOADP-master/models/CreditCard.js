const Sequelize = require('sequelize');
const db = require('../config/DBConfig');

const CreditCard = db.define('creditcard', {
    creditcardtype: {
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

module.exports = CreditCard;