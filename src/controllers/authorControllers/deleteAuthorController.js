const Author = require("../../models/Author");

const deleteAuthorController = async (req, res) => {
  const { email } = req.params;

  try {
    // Find the Author by email
    const author = await Author.findOne({
      where: { email },
    });

    if (!author) {
      return res.status(404).json({ error: "Author not found" });
    }

    // Delete the Author
    await author.destroy();

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

module.exports = deleteAuthorController;
