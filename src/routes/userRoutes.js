const express = require("express");
const router = express.Router();
const addUserController = require("../controllers/userControllers/addUserController");
const deleteUserController = require("../controllers/userControllers/deleteUserController");
const getUserController = require("../controllers/userControllers/getUserController");
const modifyUserController = require("../controllers/userControllers/modifyUserController");
const loginController = require("../controllers/userControllers/loginController");
const logoutController = require('../controllers/userControllers/logoutController')
const passport = require("../utils/passport");
const isAdmin = require("../utils/isAdmin");

router.post("/login", loginController);
router.post('/logout', logoutController);
router.get("/", isAdmin, getUserController);
router.get("/:username", isAdmin, getUserController);
router.post("/", isAdmin, addUserController);
router.put("/:username", isAdmin, modifyUserController);
router.delete("/:username", isAdmin, deleteUserController);

module.exports = router;
