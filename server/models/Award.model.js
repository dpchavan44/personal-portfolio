const mongoose = require('mongoose');

const awardSchema = new mongoose.Schema({
  awardName: {
    type: String,
    required: true,
  },
  issuedBy: {
    type: String,
    required: true,
  },
  dateReceived: {
    type: Date,
    required: false,
  },
  description: {
    type: String,
    required: true,
  },
  awardUrl: {
    type: String,  // URL to verify or learn more about the award
    required: false,
  },
  certificateFile: {
    type: String, // Path to the certificate or award file
    required: false,
  }
}, { timestamps: true });

const Award = mongoose.model('Award', awardSchema);

module.exports = Award;