const Sequelize = require('sequelize');
const db = require('../config/DBConfig');

const MedicineCollection= db.define('collection',{
    name: {
        type: Sequelize.STRING
    },
    nric: {
        type: Sequelize.STRING
    },
    queue_num: {
        type: Sequelize.INTEGER
    },
    medicine: {
        type: Sequelize.STRING
    }
});
module.exports = MedicineCollection;