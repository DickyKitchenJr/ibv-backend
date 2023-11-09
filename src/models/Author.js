const { DataTypes } = require("sequelize");
const sequelize = require("../database/connection");

const Author = sequelize.define("Author", {
  firstName: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  lastName: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  website: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  umbrellaGenre: {
    type: DataTypes.ARRAY(DataTypes.STRING),
    allowNull: false,
  },
  subGenre: {
    type: DataTypes.ARRAY(DataTypes.STRING),
    allowNull: false,
  },
  instagram: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  facebook: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  twitter: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  tiktok: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  goodreads: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  mastodon: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  amazonBio: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  threads: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  bookbub: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  bio: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  isVerified: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
    defaultValue: false
  }
});

module.exports = Author;
