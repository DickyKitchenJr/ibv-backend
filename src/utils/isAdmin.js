const isAdmin = (req, res, next) => {
  if (req.isAuthenticated() && req.user.accessLevel === "admin") {
    return next();
  }
  if(req.isAuthenticated()){
    return res.status(401).json({ error:"Unauthorized" })
  }
  res.status(403).json({ error: "Forbidden" });
};

module.exports = isAdmin;
