const loginController = (req, res, next) => {
  const user = req.user;
  res.status(200).json({ message: "Login successful", user });
  next();
};

module.exports = loginController;
