const { Op } = require('sequelize');
const { buffer, user } = require('../lib');
const logger = require('log4js').getLogger('bin-user_manager');
const { userdb } = require('../models');

exports.init = async function () {
    let manager = buffer.get("manager");
    let admin = await userdb.find_where({ [Op.or]:[ { phone: manager.phone }, { email: manager.email } ] , status: 1 });//如果没有超管账号就创建出来

    let addtime = Date.now();
    if (!admin){
        let add_obj = {
            uname: manager.uname, phone: manager.phone, email: manager.email,
            pass: user.passencry(addtime, manager.pass, 0), status : 1,
            exp: Date.now() + ( 99 * 365 * 24 * 60 * 60000 ),  type: "god",
            sid: user.sessionid(manager.phone, manager.pass), creator: 0,
            addtime: Date.now(), lastlogin: 0
        };
        await userdb.create(add_obj);
    }

    // 有时间加一个过期进程
};
