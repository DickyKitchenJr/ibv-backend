const Author = require("../../models/Author");

const addAuthorController = async (req, res) => {
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
    isVerified
  } = req.body;

  try {
    // Check for uniqueness based on first name, last name, and email
    const existingAuthor = await Author.findOne({
      where: { firstName, lastName, email },
    });

    if (existingAuthor) {
      return res
        .status(400)
        .json({ error: "Author with the same name and email already exists" });
    }

    // Create entry in Author table
    const author = await Author.create({
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
      isVerified
    });

    // Return success response
    res.status(201).json({ success: true, author });
  } catch (error) {
    console.error("Error adding author:", error);
    res.status(500).json({
      error: "Failed to add author. Please try again later.",
      details: error.message,
    });
  }
};

module.exports = addAuthorController;
