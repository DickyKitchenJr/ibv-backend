const Author = require("../../models/Author");

const modifyAuthorController = async (req, res) => {
  const { email } = req.params;

  try {
    // Find the author in Author by email
    const author = await Author.findOne({
      where: { email },
    });

    if (!author) {
      return res.status(404).json({ error: "Author not found" });
    }

    // Update the author's information based on the request body
    await author.update(req.body);

    // Return success response
    res.status(200).json({ success: true, author });
  } catch (error) {
    console.error("Error modifying author:", error);
    res
      .status(500)
      .json({ error: "Internal Server Error", details: error.message });
  }
};

module.exports = modifyAuthorController;
