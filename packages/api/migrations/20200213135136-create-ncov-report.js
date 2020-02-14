'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('ncov_reports', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      region: {
        type: Sequelize.STRING
      },
      total_confirm: {
        type: Sequelize.INTEGER
      },
      total_suspect: {
        type: Sequelize.INTEGER
      },
      total_dead: {
        type: Sequelize.INTEGER
      },
      total_heal: {
        type: Sequelize.INTEGER
      },
      total_show_rate: {
        type: Sequelize.BOOLEAN
      },
      total_show_heal: {
        type: Sequelize.BOOLEAN
      },
      total_dead_rate: {
        type: Sequelize.FLOAT
      },
      total_heal_rate: {
        type: Sequelize.FLOAT
      },
      today_confirm: {
        type: Sequelize.INTEGER
      },
      today_suspect: {
        type: Sequelize.INTEGER
      },
      today_dead: {
        type: Sequelize.INTEGER
      },
      today_heal: {
        type: Sequelize.INTEGER
      },
      today_is_updated: {
        type: Sequelize.BOOLEAN
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('ncov_reports');
  }
};
