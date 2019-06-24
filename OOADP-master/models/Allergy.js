const Sequelize = require('sequelize');
const db = require('../config/DBConfig');

const Allergy = db.define('allergy', {
    allergy_name: {
        type: Sequelize.STRING
    }
});
module.exports = Allergy;