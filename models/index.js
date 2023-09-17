const { sequelize } = require('./connection');

const Car = require('./cars');
const Denied = require('./denieds');
const Entrance = require('./entrances');

const db = {};

db.sequelize = sequelize;

db.Car = Car;
db.Denied = Denied;
db.Entrance = Entrance;

Car.init(sequelize);
Denied.init(sequelize);
Entrance.init(sequelize);

Car.associate(db);
Entrance.associate(db);

module.exports = db;
