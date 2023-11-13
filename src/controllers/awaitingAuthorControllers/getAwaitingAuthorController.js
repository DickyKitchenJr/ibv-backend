const AwaitingAuthor = require("../../models/AwaitingAuthor");

const getAwaitingAuthorsController = async (req, res) => {
  try {
    // Retrieve all authors from AwaitingAuthor
    const awaitingAuthors = await AwaitingAuthor.findAll();

    // Return the list of authors
    res.status(200).json({ success: true, awaitingAuthors });
  } catch (error) {
    console.error("Error getting authors:", error);
    res
      .status(500)
      .json({ error: "Internal Server Error", details: error.message });
  }
};

module.exports = getAwaitingAuthorsController;
