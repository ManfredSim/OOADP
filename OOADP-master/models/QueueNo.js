const Sequelize = require('sequelize');
const db = require('../config/DBConfig');

const QueueNo = db.define('queue', {
    queueNo: {
        type: Sequelize.STRING
    },
    counterNo: {
        type: Sequelize.STRING
    }
});

module.exports = QueueNo;