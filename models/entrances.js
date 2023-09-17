const Sequelize = require('sequelize');

module.exports = class Entrance extends Sequelize.Model {
  static init(sequelize) {
    return super.init(
      {},
      {
        sequelize,
        timestamps: true,
        paranoid: true,
      }
    );
  }
  static associate(db) {
    db.Entrance.belongsTo(db.Car, {
      foreignKey: { name: 'number', onDelete: 'SET NULL', as: 'Car' },
    });
  }
};
