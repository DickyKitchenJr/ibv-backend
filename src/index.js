const express = require("express");
require("dotenv").config();
const session = require("express-session");
const passport = require("./utils/passport");
const SequelizeStore = require("connect-session-sequelize")(session.Store);
const sequelize = require("./database/connection");
const compression = require("compression");
const cors = require("cors");
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
    cookie: {
      secure: process.env.NODE_ENV === "production", //currently false
      maxAge: 24 * 60 * 60 * 1000, //expire cookie after 24 hours
      httpOnly: true,
      sameSite: "lax", //"strict",
    },
  })
);

sessionStore.sync();

app.use(compression());

const allowedOrigins = ["http://localhost:5173", "https://indiebookvault.com", "https://admin.indiebookvault.com"];

const corsOptions = {
  origin: function (origin, callback) {
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  },
  credentials: true,
};

app.use(cors(corsOptions));

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
