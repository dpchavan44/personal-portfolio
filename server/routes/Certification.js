const express = require('express');
const router = express.Router();
const certificationController = require('../controllers/Certification.controller');

// GET all certifications
router.get('/', certificationController.getCertifications);

// GET a single certification by ID
router.get('/:id', certificationController.getCertificationById);

// CREATE a new certification
router.post('/', certificationController.createCertification);

// UPDATE a certification by ID
router.put('/:id', certificationController.updateCertification);

// DELETE a certification by ID
router.delete('/:id', certificationController.deleteCertification);

module.exports = router;