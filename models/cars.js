const Sequelize = require('sequelize');

module.exports = class Car extends Sequelize.Model {
  static init(sequelize) {
    return super.init(
      {
        number: {
          type: Sequelize.INTEGER,
          allowNull: false,
          primaryKey: true,
        },
      },
      {
        sequelize,
        timestamps: true,
        paranoid: true,
      }
    );
  }
  static associate(db) {
    db.Car.hasMany(db.Entrance, {
      foreignKey: { name: 'number', onDelete: 'SET NULL', as: 'Entrances' },
    });
  }
};
