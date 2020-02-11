/**
 * 已痊愈病例信息
 */

const Sequelize = require('sequelize');
const model = require('../lib/model');

class MyModel extends model{
    initModel(db) {
        return db.define(this.name, {
            id: { type: Sequelize.INTEGER, autoIncrement: true, primaryKey: true, comment: 'auto increamental id' },
            cases: { type: Sequelize.INTEGER, allowNull: false, comment: '痊愈人数'},
            illDate: { type: Sequelize.DATE, allowNull: true, comment: '发病日期'},
            dignosisDate: { type: Sequelize.DATE, allowNull: true, comment: '就诊日期'},
            suspectedDate: { type: Sequelize.DATE, allowNull: true, comment: '疑似日期'},
            reportedDate: { type: Sequelize.DATE, allowNull: true, comment: '新闻日期'},
            //就诊日期，就诊医院均因数据量极小，不予考虑
            province: { type: Sequelize.STRING, allowNull: true, comment: '确诊病例省级行政单位'},
            city: { type: Sequelize.STRING, allowNull: true, comment: '确诊病例地级行政单位'},
            county: { type: Sequelize.STRING, allowNull: true, comment: '确诊病例县级行政单位'},
            address: { type: Sequelize.STRING, allowNull: true, comment: '详细地区信息'},
            activityHistory: { type: Sequelize.STRING, allowNull: true, comment: '发病前三周活动历史'},
            //报告第详细地址和户籍住址因没有数据，不予考虑
            //年龄，性别，工作单位因数据量极小，不予考虑
            link: { type: Sequelize.STRING, allowNull: true, comment: '消息来源'},
            afterwards: { type: Sequelize.STRING, allowNull: true, comment: '后续消息（治愈、死亡等）'},
            afterwardsLink: { type: Sequelize.STRING, allowNull: true, comment: '后续消息来源'},
            firstReviewer: { type: Sequelize.STRING, allowNull: true, comment: '整理人'},
            note: { type: Sequelize.STRING, allowNull: true, comment: '备注'},
            secondReview: { type: Sequelize.BOOLEAN, allowNull: true, comment: '是否复核'},
            secondReviewer: { type: Sequelize.STRING, allowNull: true, comment: '复核人'},
        }, { timestamps: false })
    }
}
module.exports = new MyModel(__filename, true);