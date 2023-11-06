const passport = require('./passport');

const isAdmin = (req, res, next) => {
  if (req.isAuthenticated() && req.user.accessLevel === "admin") {
    return next();
  }
  res.status(403).json({ error: "Forbidden" });
};

module.exports = isAdmin;
