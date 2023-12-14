const express = require("express");
const router = express.Router();
const addUserController = require("../controllers/userControllers/addUserController");
const deleteUserController = require("../controllers/userControllers/deleteUserController");
const getUserController = require("../controllers/userControllers/getUserController");
const modifyUserController = require("../controllers/userControllers/modifyUserController");
const isAdmin = require("../utils/isAdmin");

router.get("/", isAdmin, getUserController);
router.get("/:username", isAdmin, getUserController);
router.post("/", isAdmin, addUserController);
router.put("/:username", isAdmin, modifyUserController);
router.delete("/:username", isAdmin, deleteUserController);

module.exports = router;
