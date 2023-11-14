const Author = require("../../models/Author");

const getUnverifiedAuthorsController = async (req, res) => {
  try {
    // Find unverified authors in Author
    const unverifiedAuthors = await Author.findAll({
      where: { isVerified: false },
    });

    // Return success response with unverified authors
    res.status(200).json({ success: true, unverifiedAuthors });
  } catch (error) {
    console.error("Error retrieving unverified authors:", error);
    res
      .status(500)
      .json({ error: "Internal Server Error", details: error.message });
  }
};

module.exports = getUnverifiedAuthorsController;
