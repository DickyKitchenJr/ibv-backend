const express = require("express");
const router = express.Router();
const addAwaitingAuthorController = require('../controllers/awaitingAuthorControllers/addAwaitingAuthorController')


router.post('/', addAwaitingAuthorController);

module.exports = router;