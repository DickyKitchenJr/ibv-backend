const express = require("express");
const router = express.Router();
const passport = require("../utils/passport");
const isAdmin = require("../utils/isAdmin");
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
  passport.authenticate("local"),
  getAllAuthorController
);
//for getting authors where isVerified = false
router.get("/admin/unverified", isAdmin, getUnverifiedAuthorsController);
router.post("/", passport.authenticate("local"), addAuthorController);
router.put("/:email", passport.authenticate("local"), modifyAuthorController);
router.delete("/:email", isAdmin, deleteAuthorController);

module.exports = router;
