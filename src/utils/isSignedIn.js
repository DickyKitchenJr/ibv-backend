const isAuthenticated = (req, res, next) => {
  if (req.isAuthenticated()) {
    return next();
  }
  //if user is not authenticated
  res.status(401).json({ error: "Unauthorized" });
};

module.exports = isAuthenticated;
