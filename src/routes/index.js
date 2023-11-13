const express = require('express');
const router = express.Router();
const userRoutes = require('./userRoutes');
const awaitingAuthorRoutes = require('./awaitingAuthorRoutes');
const authorRoutes = require('./authorRoutes');

// TODO: place /users router above /awaitingauthors and /authors routers before production
router.use('/author', authorRoutes);
router.use('/awaitingauthor', awaitingAuthorRoutes);
router.use('/users', userRoutes);

module.exports = router;