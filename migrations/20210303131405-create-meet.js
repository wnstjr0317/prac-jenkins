'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Meets', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      memberNumber: {
        type: Sequelize.INTEGER
      },
      meetName: {
        type: Sequelize.STRING
      },
      meetId: {
        type: Sequelize.INTEGER
      },
      notice: {
        type: Sequelize.STRING
      },
      totalcost: {
        type: Sequelize.INTEGER
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
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Meets');
  }
};
