const User = require("../../models/User");

const modifyUserController = async (req, res) => {
  try {
    const { username } = req.params;
    const { password, accessLevel } = req.body;
    // Find the user by username
    const userToUpdate = await User.findOne({ where: { username } });
    if (!userToUpdate) {
      return res.status(404).json({ error: "User not found" });
    }
    // Update the user's information based on the provided data
    if (password) {
      userToUpdate.password = password;
    }
    if (accessLevel) {
      userToUpdate.accessLevel = accessLevel;
    }
    // Save the changes to the database
    await userToUpdate.save();
    // Respond with the updated user
    res.status(200).json(userToUpdate);
  } catch (error) {
    console.error("Error modifying user:", error);
    res
      .status(500)
      .json({ error: "Internal Server Error", details: error.message});
  }
};

module.exports = modifyUserController;
