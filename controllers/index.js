const express = require('express');
const router = express.Router();

const frontEndRoutes = require("./frontEndRoutes")
router.use("/",frontEndRoutes)

const apiRoutes = require("./apiRoutes")
router.use("/api",apiRoutes)

const sessionRoutes = require("./sessionsRoutes")
router.use("/sessions",sessionRoutes)

module.exports = router;