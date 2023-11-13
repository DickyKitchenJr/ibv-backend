const express = require("express");
const router = express.Router();
const addAwaitingAuthorController = require("../controllers/awaitingAuthorControllers/addAwaitingAuthorController");
const deleteAwaitingAuthorController = require("../controllers/awaitingAuthorControllers/deleteAwaitingAuthorController");
const modifyAwaitingAuthorController = require("../controllers/awaitingAuthorControllers/modifyAwaitingAuthor");
const getAwaitingAuthorsController = require("../controllers/awaitingAuthorControllers/getAwaitingAuthorController");

router.get("/", getAwaitingAuthorsController);
router.post("/", addAwaitingAuthorController);
router.put("/:email", modifyAwaitingAuthorController);
router.delete("/", deleteAwaitingAuthorController);

module.exports = router;
