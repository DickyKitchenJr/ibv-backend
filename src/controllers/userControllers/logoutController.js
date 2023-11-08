const logoutController = (req, res) => {
  req.logout((err) => {
    if (err) {
      console.error("Error during logout:", err);
      return res.status(500).json({ error: "Internal Server Error" });
    }
    console.log("Logged out");
    return res.status(200).json({ message: "Logout successful" });
  });
};

module.exports = logoutController;
