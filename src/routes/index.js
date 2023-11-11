const express = require('express');
const router = express.Router();
const userRoutes = require('./userRoutes');
const awaitingAuthorRoutes = require('./awaitingAuthorRoutes');

// TODO: place /users router above /awaitingauthors router before production
router.use('/awaitingauthor', awaitingAuthorRoutes);
router.use('/users', userRoutes);

module.exports = router;