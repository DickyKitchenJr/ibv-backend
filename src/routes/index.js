const express = require("express");
const router = express.Router();
const userRoutes = require("./userRoutes");
const awaitingAuthorRoutes = require("./awaitingAuthorRoutes");
const authorRoutes = require("./authorRoutes");


router.use("/users", userRoutes);
router.use("/author", authorRoutes);
router.use("/awaitingauthor", awaitingAuthorRoutes);


module.exports = router;
