const assert = require('assert');
const { buffer } = require('../lib');
const services = {
    user_manager: require('./user_manager'),
    mock_data_manager: require('./mock_data_manager')
};

exports.init = async function () {
    for (let svc of Object.values(services)) await svc.init()
};