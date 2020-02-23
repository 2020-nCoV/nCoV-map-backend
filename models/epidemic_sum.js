/**
 * 感染数据地图总数
 */

const Sequelize = require('sequelize');
const model = require('../lib/model');

class MyModel extends model{
    initModel(db) {
        return db.define(this.name, {
            id: { type: Sequelize.INTEGER, primaryKey: true, comment: '行政区域代码' },
            longitude: { type: Sequelize.STRING, allowNull: false, comment: '经度' },
            latitude: { type: Sequelize.STRING, allowNull: false, comment: '纬度' },
            normal: { type: Sequelize.STRING, allowNull: false, comment: '经纬度标准' },
            infection: { type: Sequelize.INTEGER, allowNull: false, comment: '总感染人数' },
            doubt: { type: Sequelize.INTEGER, allowNull: false, comment: '总疑似感染人数' },
            serious: { type: Sequelize.INTEGER, allowNull: false, comment: '总重症人数' },
            death: { type: Sequelize.INTEGER, allowNull: false, comment: '总死亡人数' },
            rehab: { type: Sequelize.INTEGER, allowNull: false, comment: '总治愈人数' },
            timestmp: { type: Sequelize.BIGINT, allowNull: false, comment: '最近数据更新时间' },
        }, { timestamps: false })
    }
}
module.exports = new MyModel(__filename, true);