const passport = require("passport");
const User = require("../../models/User");

const loginController = (req, res, next) => {
  passport.authenticate("local", async (err, user, info) => {
    if (err) {
      return res.status(500).json({ error: "Internal Server Error" });
    }
    if (!user) {
      return res.status(401).json({ error: "Invalid credentials" });
    }

    try {
      const isValidPassword = await user.validPassword(req.body.password);

      if (!isValidPassword) {
        return res.status(401).json({ error: "Invalid credentials" });
      }

      // Log in the user
      req.logIn(user, (err) => {
        if (err) {
          return res.status(500).json({ error: "Internal Server Error" });
        }

        return res.status(200).json({ message: "Login successful", user });
      });
    } catch (error) {
      return res.status(500).json({ error: "Internal Server Error" });
    }
  })(req, res, next);
};

module.exports = loginController;
