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
            hospitalizedDate: { type: Sequelize.DATE, allowNull: true, comment: '住院时间'},
            reportedDischargedDate: {type: Sequelize.DATE, allowNull: true, comment: '出院通报日期'},
            actualDischargedDate: { type: Sequelize.DATE, allowNull: true, comment: '实际出院日期'}, // 讲道理应该是notnull，但是excel里有一个丁香医生的case没有日期
            illDate: { type: Sequelize.DATE, allowNull: true, comment: '发病日期'},
            dignosisDate: { type: Sequelize.DATE, allowNull: true, comment: '就诊日期'},
            confirmedDate: { type: Sequelize.DATE, allowNull: true, comment: '确诊日期'},
            province: { type: Sequelize.STRING, allowNull: true, comment: '确诊病例省级行政单位'},
            city: { type: Sequelize.STRING, allowNull: true, comment: '确诊病例地级行政单位'},
            county: { type: Sequelize.STRING, allowNull: true, comment: '确诊病例县级行政单位'},
            link: { type: Sequelize.STRING, allowNull: true, comment: '新闻链接'},
            prevInfo: { type: Sequelize.STRING, allowNull: true, comment: '之前个人信息'},
            prevLink: { type: Sequelize.STRING, allowNull: true, comment: '之前新闻链接'},
        }, { timestamps: false })
    }
}
module.exports = new MyModel(__filename, true);