const express = require("express");
const router = express.Router();
const passport = require("../utils/passport");
const addAwaitingAuthorController = require("../controllers/awaitingAuthorControllers/addAwaitingAuthorController");
const deleteAwaitingAuthorController = require("../controllers/awaitingAuthorControllers/deleteAwaitingAuthorController");
const modifyAwaitingAuthorController = require("../controllers/awaitingAuthorControllers/modifyAwaitingAuthor");
const getAwaitingAuthorsController = require("../controllers/awaitingAuthorControllers/getAwaitingAuthorController");

router.get("/", passport.authenticate("local"), getAwaitingAuthorsController);
router.post("/", passport.authenticate("local"), addAwaitingAuthorController);
router.put(
  "/:email",
  passport.authenticate("local"),
  modifyAwaitingAuthorController
);
router.delete(
  "/:email",
  passport.authenticate("local"),
  deleteAwaitingAuthorController
);

module.exports = router;
