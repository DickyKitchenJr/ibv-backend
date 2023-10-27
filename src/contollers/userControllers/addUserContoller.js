const User = require("../../models/User");

const addUserController = async (req, res) => {
  try {
    const { username, password, accessLevel } = req.body;
    // Check if the username already exists
    const existingUser = await User.findOne({ where: { username } });
    if (existingUser) {
      return res.status(400).json({ error: "Username already exists" });
    }
    // Create a new user
    const newUser = await User.create({ username, password, accessLevel });
    // Respond with the newly created user
    res.status(201).json(newUser);
  } catch (error) {
    console.error("Error adding user:", error);
    // Handle specific error cases if needed
    if (error.name === "SequelizeValidationError") {
      // Handle validation errors
      res
        .status(400)
        .json({ error: "Validation Error", details: error.errors });
    } else {
      // Handle other errors
      res.status(500).json({ error: "Internal Server Error" });
    }
  }
};

module.exports = addUserController;
