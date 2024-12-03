const Award = require('../models/Award.model');

// Add a new award
const addAward = async (req, res) => {
  try {
    const { awardName, issuedBy, dateReceived, description, awardUrl, certificateFile } = req.body;

    const newAward = new Award({
      awardName,
      issuedBy,
      dateReceived,
      description,
      awardUrl,
      certificateFile,
    });

    await newAward.save();
    res.status(201).json({ message: 'Award added successfully', award: newAward });
  } catch (error) {
    res.status(500).json({ message: 'Error adding award', error: error.message });
  }
};

// Get all awards
const getAwards = async (req, res) => {
  try {
    const awards = await Award.find();
    res.status(200).json(awards);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching awards', error: error.message });
  }
};

// Get a specific award by ID
const getAwardById = async (req, res) => {
  try {
    const award = await Award.findById(req.params.id);
    if (!award) {
      return res.status(404).json({ message: 'Award not found' });
    }
    res.status(200).json(award);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching award', error: error.message });
  }
};

// Delete an award
const deleteAward = async (req, res) => {
  try {
    const award = await Award.findByIdAndDelete(req.params.id);
    if (!award) {
      return res.status(404).json({ message: 'Award not found' });
    }
    res.status(200).json({ message: 'Award deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Error deleting award', error: error.message });
  }
};

module.exports = {
  addAward,
  getAwards,
  getAwardById,
  deleteAward,
};