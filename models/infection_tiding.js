/**
 * 确诊新闻
 */

const Sequelize = require('sequelize');
const model = require('../lib/model');

class MyModel extends model{
    initModel(db) {
        return db.define(this.name, {
            id: { type: Sequelize.INTEGER, autoIncrement: true, primaryKey: true, comment: '新闻id' },
            areaid: { type: Sequelize.INTEGER, primaryKey: true, comment: '行政区域代码' },
            longitude: { type: Sequelize.STRING, allowNull: false, comment: '经度' },
            latitude: { type: Sequelize.STRING, allowNull: false, comment: '纬度' },
            normal: { type: Sequelize.STRING, allowNull: false, comment: '经纬度标准' },
            casenum: { type: Sequelize.INTEGER, allowNull: false, comment: '病例数' },
            hospital: { type: Sequelize.STRING, allowNull: false, comment: '就诊医院' },
            acti_hist: { type: Sequelize.STRING, allowNull: false, comment: '发病前三周活动史' },
            detailed_area: { type: Sequelize.STRING, allowNull: false, comment: '报告详细住址' },
            household: { type: Sequelize.STRING, allowNull: false, comment: '户籍住址' },
            age: { type: Sequelize.INTEGER, allowNull: false, comment: '年龄' },
            sex: { type: Sequelize.INTEGER, allowNull: false, comment: '性别 1男 0女' },
            work: { type: Sequelize.STRING, allowNull: false, comment: '工作单位' },
            origin: { type: Sequelize.STRING, allowNull: false, comment: '消息来源' },
            onset_time: { type: Sequelize.BIGINT, allowNull: false, comment: '发病日期' },
            doubt_time: { type: Sequelize.BIGINT, allowNull: false, comment: '就诊日期' },
            determine_time: { type: Sequelize.BIGINT, allowNull: false, comment: '确诊日期' },
            news_time: { type: Sequelize.BIGINT, allowNull: false, comment: '新闻日期' },
            note: { type: Sequelize.STRING, allowNull: false, comment: '备注/点评 预留 看具体需求使用' },
            handler: { type: Sequelize.INTEGER, allowNull: false, comment: '整理人id' },
            reviewer: { type: Sequelize.INTEGER, allowNull: false, comment: '审核人id' },
        }, { timestamps: false })
    }
}
module.exports = new MyModel(__filename, true);