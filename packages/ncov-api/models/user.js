/**
 * 用户表
 */

const Sequelize = require('sequelize');
const model = require('../lib/model')

class MyModel extends model{
    initModel(db) {
        return db.define(this.name, {
            id: { type: Sequelize.INTEGER, autoIncrement: true, primaryKey: true, comment: 'uid' },
            uname: { type: Sequelize.STRING, allowNull: false, comment: '用户姓名' },
            phone: { type: Sequelize.STRING, allowNull: false, unique: true, comment: '手机号，唯一且不空' },
            email: { type: Sequelize.STRING, allowNull: false,  unique: true, comment: '用户邮箱，唯一且不空' },
            status: { type: Sequelize.INTEGER, allowNull: false, comment: '用户状态 0未启用 1已启用' },
            exp: { type: Sequelize.BIGINT, allowNull: false, comment: '用户的有效期' },
            type: { type: Sequelize.STRING, allowNull: false, comment: '用户类型，god超级管理员 staff普通管理员' },
            sid: { type: Sequelize.STRING, allowNull: false, comment: 'session ID' },
            pass: { type: Sequelize.STRING, allowNull: false, comment: '登录密码' },
            creator: { type: Sequelize.INTEGER, allowNull: false, comment: '创建人' },
            addtime: { type: Sequelize.BIGINT, allowNull: false, comment: '创建时间' },
            lastlogin: { type: Sequelize.BIGINT, allowNull: false, comment: '最后一次登录时间' }
        }, { timestamps: false })
    }
}
module.exports = new MyModel(__filename, true);