const express = require('express');
const sequelize = require('./database/connection')
const app = express();
const router = require('./routes/index')

sequelize
  .authenticate()
  .then(() => {
    console.log("Database connection established successfully");
  })
  .catch((err) => {
    console.error("Unable to connect to the database:", err);
  });

  app.use('/', router)