const Author = require("../../models/Author");

//this controller is used to provide the user facing front-end of indiebookvault.com with only the data required
const getAuthorController = async (req, res) => {
  try {
    const authors = await Author.findAll();

    // Exclude email and isVerified from each author's data
    const sanitizedAuthors = authors.map(
      ({ email, isVerified, ...rest }) => rest
    );

    // Return success response
    res.status(200).json({ success: true, authors: sanitizedAuthors });
  } catch (error) {
    console.error("Error fetching authors:", error);
    res.status(500).json({
      error: "Failed to fetch authors. Please try again later.",
      details: error.message,
    });
  }
};

module.exports = getAuthorController;
