const mongoose = require('mongoose');

// Certification Schema
const certificationSchema = new mongoose.Schema({
  certificationName: {
    type: String,
    required: true,
    trim: true,
  },
  issuedBy: {
    type: String,
    required: true,
    trim: true,
  },
  dateIssued: {
    type: Date,
    required: true,
  },
  dateExpired: {
    type: Date,  // Optional: can be null if the certification doesn't expire
    default: null,
  },
  certificationUrl: {
    type: [String],  // URL to verify or download the certification
    default: null,
  },
  certificateFile: {
    type: String,  // Optional: Path to uploaded certificate file
    default: null,
  },
  description: {
    type: String,
    default: null,
  },
}, {
  timestamps: true,  // Automatically adds createdAt and updatedAt fields
});

// Model
const Certification = mongoose.model('Certification', certificationSchema);

module.exports = Certification;