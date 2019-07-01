const Sequelize = require('sequelize');
const db = require('../config/DBConfig');

const doc_consult= db.define('consultation',{
    name: {
        type: Sequelize.STRING
    },
    nric: {
        type: Sequelize.STRING
    },
    queue_num: {
        type: Sequelize.INTEGER
    },
    description: {
        type: Sequelize.STRING
    },
    medicine_id : {
        type: Sequelize.STRING
    },
    medicine: {
        type: Sequelize.STRING
    }
    
});
module.exports = doc_consult;