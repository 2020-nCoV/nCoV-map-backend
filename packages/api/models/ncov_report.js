'use strict';
module.exports = (sequelize, DataTypes) => {
  const NCovReport = sequelize.define(
    'NcovReport',
    {
      region: DataTypes.STRING,
      total_confirm: DataTypes.INTEGER,
      total_suspect: DataTypes.INTEGER,
      total_dead: DataTypes.INTEGER,
      total_heal: DataTypes.INTEGER,
      total_show_rate: DataTypes.BOOLEAN,
      total_show_heal: DataTypes.BOOLEAN,
      total_dead_rate: DataTypes.FLOAT,
      total_heal_rate: DataTypes.FLOAT,
      today_confirm: DataTypes.INTEGER,
      today_suspect: DataTypes.INTEGER,
      today_dead: DataTypes.INTEGER,
      today_heal: DataTypes.INTEGER,
      today_is_updated: DataTypes.BOOLEAN,
    },
    {},
  );
  NCovReport.associate = function(models) {
    // associations can be defined here
  };
  return NCovReport;
};
