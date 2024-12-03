const Certification = require('../models/Certification.model');

// GET all certifications
const getCertifications = async (req, res) => {
    try {
        const certifications = await Certification.find();
        res.json(certifications);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

// GET a single certification by ID
const getCertificationById = async (req, res) => {
    try {
        const certification = await Certification.findById(req.params.id);
        if (!certification) {
            return res.status(404).json({ message: 'Certification not found' });
        }
        res.json(certification);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

// CREATE a new certification
const createCertification = async (req, res) => {
    const certification = new Certification({
        certificationName: req.body.certificationName,
      issuedBy: req.body.issuedBy,
      dateIssued: req.body.dateIssued,
      dateExpired: req.body.dateExpired,
      certificationUrl: req.body.certificationUrl,
      certificateFile: req.body.certificateFile,
      description: req.body.description,
    });

    try {
        const newCertification = await certification.save();
        res.status(201).json(newCertification);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

// UPDATE a certification by ID
const updateCertification = async (req, res) => {
    try {
        const certification = await Certification.findById(req.params.id);
        if (!certification) {
            return res.status(404).json({ message: 'Certification not found' });
        }

        certification.certificationName = req.body.certificationName || certification.certificationName;
        certification.issuingOrganization = req.body.issuingOrganization || certification.issuingOrganization;
        certification.issueDate = req.body.issueDate || certification.issueDate;
        certification.expirationDate = req.body.expirationDate || certification.expirationDate;
        certification.credentialID = req.body.credentialID || certification.credentialID;
        certification.credentialURL = req.body.credentialURL || certification.credentialURL;

        const updatedCertification = await certification.save();
        res.json(updatedCertification);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

// DELETE a certification by ID
const deleteCertification = async (req, res) => {
    try {
        const certification = await Certification.findById(req.params.id);
        if (!certification) {
            return res.status(404).json({ message: 'Certification not found' });
        }

        await certification.remove();
        res.json({ message: 'Certification deleted' });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

module.exports = {
    getCertifications,
    getCertificationById,
    createCertification,
    updateCertification,
    deleteCertification
};