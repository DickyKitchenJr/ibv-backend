const express = require("express");
const router = express.Router();
const addAwaitingAuthorController = require("../controllers/awaitingAuthorControllers/addAwaitingAuthorController");
const deleteAwaitingAuthorController = require("../controllers/awaitingAuthorControllers/deleteAwaitingAuthorController");
const modifyAwaitingAuthorController = require("../controllers/awaitingAuthorControllers/modifyAwaitingAuthor");
const getAwaitingAuthorsController = require("../controllers/awaitingAuthorControllers/getAwaitingAuthorController");
const isSignedIn = require("../utils/isSignedIn");

router.get("/", isSignedIn, getAwaitingAuthorsController);
router.post("/", addAwaitingAuthorController);
router.put("/:email", isSignedIn, modifyAwaitingAuthorController);
router.delete("/:email", isSignedIn, deleteAwaitingAuthorController);

module.exports = router;
