const CompanyExperience = require('../models/Experience.model'); // Ensure this matches the actual file name

// Get all experiences
const getAllExperiences = async (req, res) => {
  try {
    const experiences = await CompanyExperience.find().sort({ startDate: -1 }); // 1 for ascending, -1 for descending
    res.json(experiences);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Create a new experience
const createExperience = async (req, res) => {
  const experience = new CompanyExperience({
    companyName: req.body.companyName,
    jobTitle: req.body.jobTitle,
    jobDescription: req.body.jobDescription,
    startDate: req.body.startDate,
    endDate: req.body.endDate || null,  // optional field, defaults to null if not provided
    location: req.body.location,
    skillsUsed: req.body.skillsUsed || [],  // default to an empty array if not provided
    technologies: req.body.technologies || [], // default to an empty array
    achievements: req.body.achievements || [], // default to an empty array
    employeeType: req.body.employeeType,
    reference: req.body.reference || null // optional, defaults to null if not provided
  });

  try {
    const newExperience = await experience.save();
    res.status(201).json(newExperience);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

module.exports = {
  getAllExperiences,
  createExperience
};