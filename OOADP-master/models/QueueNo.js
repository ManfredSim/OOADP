const Sequelize = require('sequelize');
const db = require('../config/DBConfig');

const Queue = db.define('queue', {
    name: {
        type: Sequelize.STRING
    },
    nric: {
        type: Sequelize.STRING
    },
    travelOption: {
        type: Sequelize.STRING
    },
    queueNo: {
        type: Sequelize.STRING
    },
    counterNo: {
        type: Sequelize.STRING
    }
});

module.exports = Queue;