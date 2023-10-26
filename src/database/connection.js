const { Sequelize } = require("sequelize");
require("dotenv").config(); 

const sequelize = new Sequelize({
  dialect: "mysql",
  host: process.env.MYSQL_HOST_NAME,
  port: process.env.MYSQL_PORT,
  username: process.env.MYSQL_USERNAME,
  password: process.env.MYSQL_PASSWORD,
  database: process.env.MYSQL_DATABASE_NAME,
});

module.exports = sequelize;
