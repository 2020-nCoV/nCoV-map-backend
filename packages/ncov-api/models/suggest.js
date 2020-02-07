/**
 * 建议反馈
 */

const Sequelize = require('sequelize');
const model = require('../lib/model');

class MyModel extends model{
    initModel(db) {
        return db.define(this.name, {
            id: { type: Sequelize.INTEGER, autoIncrement: true, primaryKey: true, comment: '反馈id' },
            title: { type: Sequelize.STRING, primaryKey: true, comment: '反馈标题' },
            content: { type: Sequelize.TEXT, allowNull: false, comment: '反馈内容' },
            addtime: { type: Sequelize.BIGINT, allowNull: false, comment: '反馈时间' },
            name: { type: Sequelize.BIGINT, allowNull: false, comment: '反馈人' },
            phone: { type: Sequelize.INTEGER, allowNull: false, comment: '手机' },
            email: { type: Sequelize.STRING, allowNull: false, comment: '邮箱' },
            qq: { type: Sequelize.STRING, allowNull: false, comment: 'qq' },
            wecheat: { type: Sequelize.STRING, allowNull: false, comment: '微信' },
            handler: { type: Sequelize.INTEGER, allowNull: false, comment: '处理状态 0未处理 1已处理' },
            reviewer: { type: Sequelize.INTEGER, allowNull: false, comment: '处理人id' },
            result: { type: Sequelize.STRING, allowNull: false, comment: '处理结果' },
        }, { timestamps: false })
    }
}
module.exports = new MyModel(__filename, true);