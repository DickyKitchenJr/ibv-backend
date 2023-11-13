const User = require("../../models/User");

const getUserController = async (req, res) => {
  try {
    const { username } = req.params;
    // If a username is provided, find a specific user
    if (username) {
      const user = await User.findOne({ where: { username } });
      if (!user) {
        return res.status(404).json({ error: "User not found" });
      }
      return res.status(200).json(user);
    }
    // If no username is provided, find all users
    const users = await User.findAll();

    return res.status(200).json(users);
  } catch (error) {
    console.error("Error getting users:", error);
    res
      .status(500)
      .json({ error: "Internal Server Error", details: error.message });
  }
};

module.exports = getUserController;
