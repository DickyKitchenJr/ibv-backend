const express = require("express");
const router = express.Router();
const isAdmin = require("../utils/isAdmin");
const isSignedIn = require("../utils/isSignedIn");
const deleteAuthorController = require("../controllers/authorControllers/deleteAuthorController");
const modifyAuthorController = require("../controllers/authorControllers/modifyAuthorController");
const getAuthorController = require("../controllers/authorControllers/getAuthorController");
const addAuthorController = require("../controllers/authorControllers/addAuthorController");
const getAllAuthorController = require("../controllers/authorControllers/getAllAuthorController");
const getUnverifiedAuthorsController = require("../controllers/authorControllers/getUnverifiedAuthorController");

//for getting sanitized author data
router.get("/", getAuthorController);
//for getting all author data
router.get("/admin", isAdmin, getAllAuthorController);
//for getting an author by email address
router.get(
  "/admin/:email",
  isSignedIn,
  getAllAuthorController
);
//for getting authors where isVerified = false
router.get("/admin/unverified", isAdmin, getUnverifiedAuthorsController);
router.post("/", isSignedIn, addAuthorController);
router.put("/:email", isSignedIn, modifyAuthorController);
router.delete("/:email", isAdmin, deleteAuthorController);

module.exports = router;
