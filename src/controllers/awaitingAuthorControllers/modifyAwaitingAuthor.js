const AwaitingAuthor = require("../../models/AwaitingAuthor");

const modifyAwaitingAuthorController = async (req, res) => {
  const { email } = req.params;

  try {
    // Find the author in AwaitingAuthor by email
    const awaitingAuthor = await AwaitingAuthor.findOne({
      where: { email },
    });

    if (!awaitingAuthor) {
      return res.status(404).json({ error: "Author not found" });
    }

    // Update the author's information based on the request body
    await awaitingAuthor.update(req.body);

    // Return success response
    res.status(200).json({ success: true, awaitingAuthor });
  } catch (error) {
    console.error("Error modifying author:", error);
    res
      .status(500)
      .json({ error: "Internal Server Error", details: error.message });
  }
};

module.exports = modifyAwaitingAuthorController;
