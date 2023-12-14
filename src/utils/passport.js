const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;
const bcrypt = require("bcrypt");
const User = require("../models/User");

passport.use(
  new LocalStrategy(
    { usernameField: "username" },
    async (username, password, done) => {
      try {
        const authUser = await User.findOne({ where: { username } });

        if (!authUser) {
          return done(null, false, { message: "Incorrect username." });
        }

        const isValidPassword = await bcrypt.compare(
          password,
          authUser.password
        );

        if (!isValidPassword) {
          return done(null, false, { message: "Incorrect password." });
        }

        return done(null, authUser);
      } catch (error) {
        return done(error);
      }
    }
  )
);

passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser(async (id, done) => {
  try {
    const user = await User.findByPk(id);
      done(null, user);
    } catch (error) {
      done(error);
  }
});

module.exports = passport;
