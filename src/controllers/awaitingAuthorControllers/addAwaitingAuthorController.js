const AwaitingAuthor = require("../../models/AwaitingAuthor");

const addAwaitingAuthorController = async (req, res) => {
  const {
    firstName,
    lastName,
    email,
    website,
    umbrellaGenre,
    subGenre,
    instagram,
    facebook,
    twitter,
    tiktok,
    goodreads,
    mastodon,
    amazonBio,
    threads,
    bookbub,
    bio,
  } = req.body;

  try {
    // Check for uniqueness based on first name, last name, and email
    const existingAuthor = await AwaitingAuthor.findOne({
      where: { firstName, lastName, email },
    });

    if (existingAuthor) {
      return res
        .status(400)
        .json({ error: "Author with the same name and email already exists" });
    }

    // Create entry in AwaitingAuthor table
    const awaitingAuthor = await AwaitingAuthor.create({
      firstName,
      lastName,
      email,
      website,
      umbrellaGenre,
      subGenre,
      instagram,
      facebook,
      twitter,
      tiktok,
      goodreads,
      mastodon,
      amazonBio,
      threads,
      bookbub,
      bio,
    });

    // Return success response
    res.status(201).json({ success: true, awaitingAuthor });
  } catch (error) {
    console.error("Error adding author:", error);
    res
      .status(500)
      .json({ error: "Failed to add author. Please try again later." });
  }
};

module.exports = addAwaitingAuthorController;
