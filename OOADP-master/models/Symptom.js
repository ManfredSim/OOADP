const Sequelize = require('sequelize');
const db = require('../config/DBConfig');

const Symptom = db.define('symptom', {
    counter: {
        type: Sequelize.STRING
    },
    question: {
        type: Sequelize.STRING
    },
    answer_one: {
        type: Sequelize.STRING
    },
    answer_two: {
        type: Sequelize.STRING
    },
    answer_three: {
        type: Sequelize.STRING
    },
    answer_four: {
        type: Sequelize.STRING
    },
});

module.exports = Symptom;