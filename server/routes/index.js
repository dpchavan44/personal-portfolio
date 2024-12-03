
const express = require('express');
const experienceRouter = require('./Experience');
const certificationRouter = require('./Certification');
const awardRouter = require('./Award');

const router = express.Router();
router.use('/experience', experienceRouter);
router.use('/certification', certificationRouter);
router.use('/award', awardRouter);
// Add other routes here as needed

module.exports = router;