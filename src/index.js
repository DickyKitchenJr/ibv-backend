const express = require('express');
const sequelize = require('./database/connection')

const app = express();

sequelize
  .authenticate()
  .then(() => {
    console.log("Database connection established successfully");
  })
  .catch((err) => {
    console.error("Unable to connect to the database:", err);
  });