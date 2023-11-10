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
    validate: {
      isEmail: true,
    },
  },
  website: {
    type: DataTypes.STRING,
    allowNull: true,
    validate: {
      isUrl: true,
    },
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
    validate: {
      isUrl: true,
    },
  },
  facebook: {
    type: DataTypes.STRING,
    allowNull: true,
    validate: {
      isUrl: true,
    },
  },
  twitter: {
    type: DataTypes.STRING,
    allowNull: true,
    validate: {
      isUrl: true,
    },
  },
  tiktok: {
    type: DataTypes.STRING,
    allowNull: true,
    validate: {
      isUrl: true,
    },
  },
  goodreads: {
    type: DataTypes.STRING,
    allowNull: true,
    validate: {
      isUrl: true,
    },
  },
  mastodon: {
    type: DataTypes.STRING,
    allowNull: true,
    validate: {
      isUrl: true,
    },
  },
  amazonBio: {
    type: DataTypes.STRING,
    allowNull: true,
    validate: {
      isUrl: true,
    },
  },
  threads: {
    type: DataTypes.STRING,
    allowNull: true,
    validate: {
      isUrl: true,
    },
  },
  bookbub: {
    type: DataTypes.STRING,
    allowNull: true,
    validate: {
      isUrl: true,
    },
  },
  bio: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  isVerified: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
    defaultValue: false,
  },
});

// TODO: erase on production
// opted to use the following as opposed to sequelize-cli for ease of use
Author.sync();

module.exports = Author;
