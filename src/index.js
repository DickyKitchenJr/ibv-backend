const express = require("express");
require("dotenv").config();
const session = require("express-session");
const passport = require("./utils/passport");
const SequelizeStore = require("connect-session-sequelize")(session.Store);
const sequelize = require("./database/connection");
const app = express();
const router = require("./routes/index");
const PORT = process.env.PORT || 3030;

const sessionStore = new SequelizeStore({
  db: sequelize,
  checkExpirationInterval: 30 * 60 * 1000, //check for expired sessions every 30 min
  expiration: 24 * 60 * 60 * 1000, // expire sessions after 24 hours
});

app.use(
  session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
    store: sessionStore,
  })
);

sessionStore.sync();

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

app.use(passport.initialize());
app.use(passport.session());

app.use("/", router);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
