const Sequelize = require('sequelize');

const sequelize = new Sequelize('golbaldorado','julian','ZKM4LZ/LX5poAOiX', {
  host: 'localhost',
  dialect: 'mysql',
});

module.exports=sequelize;