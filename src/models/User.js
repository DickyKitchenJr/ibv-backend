const { DataTypes } = require("sequelize");
const bcrypt = require("bcrypt");
const sequelize = require("../database/connection");

const User = sequelize.define("User", {
  username: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  accessLevel: {
    type: DataTypes.ENUM("admin", "helper"),
    defaultValue: "helper",
    allowNull: false,
  },
});

// Hash the password before saving to the database
User.beforeCreate(async (user) => {
  const saltRounds = 10;
  user.password = await bcrypt.hash(user.password, saltRounds);
});

// TODO: erase on production
// opted to use the following as opposed to sequelize-cli for ease of use
// User.sync();

module.exports = User;
