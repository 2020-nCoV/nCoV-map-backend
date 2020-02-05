/**
 * 行政区域代码
 */

const Sequelize = require('sequelize');
const model = require('../lib/model');

class MyModel extends model{
    initModel(db) {
        return db.define(this.name, {
            id: { type: Sequelize.INTEGER, autoIncrement: true, primaryKey: true, comment: '区域代码 六位' },
            name: { type: Sequelize.STRING, primaryKey: true, comment: '行政区域名称' },
            level: { type: Sequelize.STRING, allowNull: false, comment: '区域级别 prov省级 city市级 county县级/区级 town镇级 ' },
            superior: { type: Sequelize.INTEGER, allowNull: false, comment: '上级区域代码' },
        }, { timestamps: false })
    }
}
module.exports = new MyModel(__filename, true);