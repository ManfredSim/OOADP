const Sequelize = require('sequelize');
const db = require('../config/DBConfig');

const MedicineCollection= db.define('collection',{
    id: {
        type: sequalize.INTEGER
    },
    medicine: {
        type: sequalize.STRING
    }
});
module.exports = MedicineCollection;