const {Sequelize} = require('sequelize');
const sequelize = new Sequelize('mysql://root:password@localhost/pulse-api');


module.exports = {sequelize};
