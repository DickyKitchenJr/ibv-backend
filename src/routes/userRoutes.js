const express = require("express");
const router = express.Router();
const addUserController = require("../controllers/userControllers/addUserController");
const deleteUserController = require("../controllers/userControllers/deleteUserController");
const getUserController = require("../controllers/userControllers/getUserController");
const modifyUserController = require("../controllers/userControllers/modifyUserController");

router.get('/users/:username', getUserController)
router.post("/users", addUserController);
router.put('/users/:username', modifyUserController)
router.delete("/users/:username", deleteUserController);

module.exports = router;
