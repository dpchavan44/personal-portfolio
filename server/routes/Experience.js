const express = require('express');
const { getAllExperiences, createExperience } = require('../controllers/Experience.controller');

const router = express.Router();

router.get('/', getAllExperiences);
router.post('/', createExperience);

module.exports = router;