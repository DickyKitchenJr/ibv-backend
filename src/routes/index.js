const express = require("express");
const router = express.Router();
const passport = require("../utils/passport");
const loginController = require("../controllers/userControllers/loginController");
const logoutController = require("../controllers/userControllers/logoutController");
const userRoutes = require("./userRoutes");
const awaitingAuthorRoutes = require("./awaitingAuthorRoutes");
const authorRoutes = require("./authorRoutes");

router.post("/login", passport.authenticate("local"), loginController);
router.delete("/logout", logoutController);
router.use("/users", userRoutes);
router.use("/author", authorRoutes);
router.use("/awaitingauthor", awaitingAuthorRoutes);

module.exports = router;
