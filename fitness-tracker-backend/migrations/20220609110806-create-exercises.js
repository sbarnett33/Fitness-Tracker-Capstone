'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('exercises', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      bodyPart: {
        type: Sequelize.STRING
      },
      equipment: {
        type: Sequelize.STRING
      },
      gitURL: {
        type: Sequelize.STRING
      },
      id: {
        type: Sequelize.STRING
      },
      name: {
        type: Sequelize.STRING
      },
      target: {
        type: Sequelize.STRING
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
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('exercises');
  }
};