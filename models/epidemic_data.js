/**
 * 感染数据地图
 */

const Sequelize = require('sequelize');
const model = require('../lib/model');

class MyModel extends model{
    initModel(db) {
        return db.define(this.name, {
            id: { type: Sequelize.INTEGER, autoIncrement: true, primaryKey: true, comment: '数据id' },
            areaid: { type: Sequelize.INTEGER, primaryKey: true, comment: '行政区域代码' },
            longitude: { type: Sequelize.STRING, allowNull: false, comment: '经度' },
            latitude: { type: Sequelize.STRING, allowNull: false, comment: '纬度' },
            normal: { type: Sequelize.STRING, allowNull: false, comment: '经纬度标准' },
            infection: { type: Sequelize.INTEGER, allowNull: false, comment: '感染人数' },
            doubt: { type: Sequelize.INTEGER, allowNull: false, comment: '疑似感染' },
            death: { type: Sequelize.INTEGER, allowNull: false, comment: '死亡人数' },
            rehab: { type: Sequelize.INTEGER, allowNull: false, comment: '治愈人数' },
            timestmp: { type: Sequelize.BIGINT, allowNull: false, comment: '数据时间' },
        }, { timestamps: false })
    }
}
module.exports = new MyModel(__filename, true);