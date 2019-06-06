const Sequelize = require('sequelize');
const db = require('../config/DBConfig');

const patient_allergy = db.define('patient_allergy', {
    id: {
        type: Sequelize.INTEGER
    },
    allergy_id: {
        type: Sequelize.INTEGER
    },
    patient_id: {
        type: Sequelize.INTEGER
    }
});
module.exports = patient_allergy;