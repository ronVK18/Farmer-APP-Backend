const mongoose = require('mongoose');

const FarmerSchema = new mongoose.Schema({
    name: { 
        type: String, 
        required: true 
    },
    dateOfBirth: { 
        type: Date 
    },
    gender: { 
        type: String, 
        enum: ['Male', 'Female', 'Other'] 
    },
    contactNumber: { 
        type: String, 
        required: true, 
        unique: true 
    },
    email: { 
        type: String 
    },
    address: {
        village: { type: String },
        district: { type: String },
        state: { type: String },
        country: { type: String, default: 'India' },
        postalCode: { type: String }
    },
    identification: {
        aadhaarNumber: { type: String, unique: true },
        panNumber: { type: String },
        voterId: { type: String }
    },
    bankDetails: {
        bankName: { type: String },
        accountNumber: { type: String },
        ifscCode: { type: String },
        branch: { type: String }
    },
    cooperativeMembership: {
        isMember: { type: Boolean, default: false },
        societyName: { type: String }
    },
    createdAt: { 
        type: Date, 
        default: Date.now 
    },
    updatedAt: { 
        type: Date, 
        default: Date.now 
    }
});

module.exports = mongoose.model('Farmer', FarmerSchema);
