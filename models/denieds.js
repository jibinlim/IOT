const Sequelize = require('sequelize');

module.exports = class Denied extends Sequelize.Model {
  static init(sequelize) {
    
    return super.init({
        number: {
            type: Sequelize.INTEGER,
            allowNull: false,
          },
    },
      {
        sequelize,
        timestamps: true,
        paranoid: true,
      }
    );
  }
};
