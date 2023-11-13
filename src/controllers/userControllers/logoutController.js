const logoutController = (req, res) => {
  req.logout((error) => {
    if (error) {
      console.error("Error during logout:", error);
      return res
        .status(500)
        .json({ error: "Internal Server Error", details: error.message});
    }
    console.log("Logged out");
    return res.status(200).json({ message: "Logout successful" });
  });
};

module.exports = logoutController;
