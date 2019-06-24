const Sequelize = require('sequelize');
const db = require('../config/DBConfig');

const doc_consult= db.define('consultation',{
    id: {
        type: sequalize.INTEGER
    },
    description: {
        type: sequalize.STRING
    },
    medicine_id : {
        type: sequalize.STRING
    },
    medicine: {
        type: sequalize.STRING
    }
    
});
module.exports = doc_consult;