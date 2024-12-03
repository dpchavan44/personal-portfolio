const express = require('express');
const router = express.Router();
const awardController = require('../controllers/Award.controller');

// Add a new award
router.post('/', awardController.addAward);

// Get all awards
router.get('/', awardController.getAwards);

// Get a specific award by ID
router.get('/:id', awardController.getAwardById);

// Delete an award by ID
router.delete('/:id', awardController.deleteAward);

module.exports = router;