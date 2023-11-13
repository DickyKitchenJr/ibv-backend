const AwaitingAuthor = require("../../models/AwaitingAuthor");

const deleteAwaitingAuthorController = async (req, res) => {
  const { id } = req.params;

  try {
    // Find the AwaitingAuthor by ID
    const awaitingAuthor = await AwaitingAuthor.findByPk(id);

    if (!awaitingAuthor) {
      return res.status(404).json({ error: "Author not found" });
    }

    // Delete the AwaitingAuthor
    await awaitingAuthor.destroy();

    // Return success response
    res
      .status(200)
      .json({ success: true, message: "Author deleted successfully" });
  } catch (error) {
    console.error("Error deleting Author:", error);
    res
      .status(500)
      .json({ error: "Internal Server Error", details: error.message });
  }
};

module.exports = deleteAwaitingAuthorController;
