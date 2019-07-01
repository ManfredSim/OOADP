const Sequelize = require('sequelize');
const db = require('../config/DBConfig');

const Doctor = db.define('doctor', {
    consultation_symptom: {
        type: Sequelize.STRING
    },
    consultation_prescription: {
        type: Sequelize.STRING
    },
    consultation_comments: {
        type: Sequelize.STRING
    },
});

module.exports = Doctor;