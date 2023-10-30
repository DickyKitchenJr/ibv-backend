const express = require("express");
const router = express.Router();
const addUserController = require("../controllers/userControllers/addUserController");
const deleteUserController = require("../controllers/userControllers/deleteUserController");


router.post("/users", addUserController);
router.delete("/users/:username", deleteUserController);

module.exports = router;
