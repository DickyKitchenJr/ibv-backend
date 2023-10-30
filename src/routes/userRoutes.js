const express = require("express");
const router = express.Router();
const addUserController = require("../controllers/userControllers/addUserController");
const deleteUserController = require("../controllers/userControllers/deleteUserController");
const getUserController = require("../controllers/userControllers/getUserController");
const modifyUserController = require("../controllers/userControllers/modifyUserController");

router.get("/:username", getUserController);
router.post("/", addUserController);
router.put("/:username", modifyUserController);
router.delete("/:username", deleteUserController);

module.exports = router;
