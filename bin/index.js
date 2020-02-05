const assert = require('assert');
const { buffer } = require('../lib');
const services = {
    user_manager: require('./user_manager'),
};

exports.init = async function () {
    for (let svc of Object.values(services)) await svc.init()
};