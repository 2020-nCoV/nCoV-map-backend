/**
 * 已痊愈病例信息
 */

const Sequelize = require('sequelize');
const model = require('../lib/model');

class MyModel extends model{
    initModel(db) {
        return db.define(this.name, {
            id: { type: Sequelize.INTEGER, autoIncrement: true, primaryKey: true, comment: 'auto incremental id' },
            cases: { type: Sequelize.INTEGER, allowNull: false, comment: '去世人数'},
            hospitalized: { type: Sequelize.DATE, allowNull: true, comment: '住院时间'},
            reportedDate: {type: Sequelize.DATE, allowNull: true, comment: '病例通报日期'},
            reportedDeathDate: { type: Sequelize.DATE, allowNull: false, comment: '死亡通报日期'},
            deadDate: { type: Sequelize.DATE, allowNull: false, comment: '死亡日期'}, // 死亡日期和通报日期都得有 不能null
            illDate: { type: Sequelize.DATE, allowNull: true, comment: '发病日期'},
            dignosisDate: { type: Sequelize.DATE, allowNull: true, comment: '就诊日期'},
            confirmedDate: { type: Sequelize.DATE, allowNull: true, comment: '确诊日期'},
            age: { type: Sequelize.INTEGER, allowNull: true, comment: '年龄'},
            gender: { type: Sequelize.STRING, allowNull: true, comment: '性别'},
            province: { type: Sequelize.STRING, allowNull: true, comment: '确诊病例省级行政单位'},
            city: { type: Sequelize.STRING, allowNull: true, comment: '确诊病例地级行政单位'},
            county: { type: Sequelize.STRING, allowNull: true, comment: '确诊病例县级行政单位'},
            activityHistory: { type: Sequelize.STRING, allowNull: true, comment: '发病前活动史'},
            link: { type: Sequelize.STRING, allowNull: true, comment: '新闻链接'}, // 没链接你怎么证明信息的真实性？应该allowNull:false把
            note: { type: Sequelize.STRING, allowNull: true, comment: '备注'},
        }, { timestamps: false })
    }
}
module.exports = new MyModel(__filename, true);