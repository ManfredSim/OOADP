const Sequelize = require('sequelize');
const db = require('../config/DBConfig');

const doc_consult= db.define('consultation',{
    description: {
        type: sequalize.STRING
    }
});
module.exports = doc_consult;