const express = require("express");
const router = express.Router();
const deleteAuthorController = require("../controllers/authorControllers/deleteAuthorController");
const modifyAuthorController = require("../controllers/authorControllers/modifyAuthorController");
const getAuthorController = require("../controllers/authorControllers/getAuthorController");
const addAuthorController = require("../controllers/authorControllers/addAuthorController");
const getAllAuthorController = require("../controllers/authorControllers/getAllAuthorController");

//for getting sanitized author data
router.get("/", getAuthorController);
//for getting all author data
router.get("/admin", getAllAuthorController);
//for getting an author by email address
router.get("/admin:email", getAllAuthorController);
router.post("/", addAuthorController);
router.put("/:email", modifyAuthorController);
router.delete("/", deleteAuthorController);

module.exports = router;
