const User = require("../../models/User");

const deleteUserController = async (req, res) => {
  try {
    const usernameToDelete = req.params.username;
    // Check if the user exists
    const userToDelete = await User.findOne({
      where: { username: usernameToDelete },
    });
    if (!userToDelete) {
      return res.status(404).json({ error: "User not found" });
    }
    // Delete the user
    await userToDelete.destroy();
    // Respond with a success message
    res.status(200).json({ message: "User deleted successfully" });
  } catch (error) {
    console.error("Error deleting user:", error);
    // Handle specific error cases if needed
    res
      .status(500)
      .json({ error: "Internal Server Error", details: error.message });
  }
};

module.exports = deleteUserController;
