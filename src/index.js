const express = require('express');
const sequelize = require('./database/connection')
const app = express();
const router = require('./routes/index')
const PORT = process.env.PORT || 3030;

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

sequelize
  .authenticate()
  .then(() => {
    console.log("Database connection established successfully");
  })
  .catch((err) => {
    console.error("Unable to connect to the database:", err);
  });

  app.use('/', router)

  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });