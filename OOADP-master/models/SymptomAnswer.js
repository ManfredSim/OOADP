
const Sequelize = require('sequelize');
const db = require('../config/DBConfig');

const Symptom = db.define('symptomanswer', {result_symptom: {
        type: Sequelize.STRING
    },
    result_text: {
        type: Sequelize.STRING
    },
    result_recommend: {
        type: Sequelize.STRING
    },
});

module.exports = SymptomAnswer;