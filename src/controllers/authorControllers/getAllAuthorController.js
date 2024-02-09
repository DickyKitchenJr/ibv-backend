const Author = require("../../models/Author");

//this controller is used to provide the admin facing front-end of indiebookvault.com with all author data or specified by email
const getAllAuthorController = async (req, res) => {
  const { email } = req.params;

  try {
    if (email) {
      // Fetch a specific author based on email
      const author = await Author.findOne({
        where: { email },
      });

      if (!author) {
        return res.status(404).json({ error: "Author not found" });
      }

      // Return success response with the specific author
      return res.status(200).json({ success: true, author });
    } else {
      const authors = await Author.findAll();

      // Return success response with all authors
      return res.status(200).json({ success: true, authors });
    }
  } catch (error) {
    console.error("Error fetching authors:", error);
    res.status(500).json({
      error: "Failed to fetch authors. Please try again later.",
      details: error.message,
    });
  }
};

module.exports = getAllAuthorController;
