const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define the schema for storing company experiences
const companyExperienceSchema = new Schema({
    companyName: {
        type: String,
        required: true,  // company name is required
        trim: true       // remove any leading/trailing spaces
    },
    jobTitle: {
        type: String,
        required: true,  // job title is required
        trim: true
    },
    jobDescription: {
        type: String,
        required: true,  // detailed job description
        trim: true
    },
    startDate: {
        type: Date,
        required: true   // start date is required
    },
    endDate: {
        type: Date,
        required: false, // end date is optional (can be null for current job)
        default: null    // if endDate is not provided, default it to null
    },
    location: {
        type: String,
        required: false, // location can be optional
        trim: true
    },
    skillsUsed: {
        type: [String],  // Array of skills used in this role
        required: false, // Optional, but can be helpful
        default: []      // Default to an empty array
    },
    technologies: {
        type: [String],  // Array of technologies used in this role
        required: false,
        default: []      // Default to an empty array
    },
    achievements: {
        type: [String],  // Array of achievements or significant contributions
        required: false, 
        default: []      // Default to an empty array
    },
    employeeType: {
        type: String,  // e.g., Full-time, Part-time, Contractor
        required: true,
        enum: ['Full-time', 'Part-time', 'Contractor', 'Intern'],  // Enum to restrict values
    },
    reference: {
        type: String,  // Optional reference or contact for the company
        required: false,
        trim: true
    }
}, {
    timestamps: true,  // Automatically manage createdAt and updatedAt fields
});

// Create the model based on the schema
const CompanyExperience = mongoose.model('CompanyExperience', companyExperienceSchema);

module.exports = CompanyExperience;