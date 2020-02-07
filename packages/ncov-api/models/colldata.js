/**
 * 数据收集
 */

const Sequelize = require('sequelize');
const model = require('../lib/model');

class MyModel extends model{
    initModel(db) {
        return db.define(this.name, {
            id: { type: Sequelize.INTEGER, autoIncrement: true, primaryKey: true, comment: '后续消息id' },
            tidingid: { type: Sequelize.INTEGER, primaryKey: true, comment: '对应确诊新闻id' },
            origin: { type: Sequelize.STRING, allowNull: false, comment: '后续消息新闻来源' },
            roughly: { type: Sequelize.TEXT, allowNull: false, comment: '后续消息内容' },
            note: { type: Sequelize.TEXT, allowNull: false, comment: '备注/点评 预留 看具体需求使用' },
            handler: { type: Sequelize.INTEGER, allowNull: false, comment: '整理人id' },
            reviewer: { type: Sequelize.INTEGER, allowNull: false, comment: '审核人id' },
        }, { timestamps: false })
    }
}
module.exports = new MyModel(__filename, true);