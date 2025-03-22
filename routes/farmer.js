const express = require('express');
const router = express.Router();
const Farmer = require('../models/Farmer'); // Adjust path based on your structure

// Create Farmer
router.post('/create', async (req, res) => {
    try {
        const farmerData = req.body;
        const newFarmer = new Farmer(farmerData);
        await newFarmer.save();
        res.status(201).json({ message: 'Farmer created successfully.', farmer: newFarmer });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error creating farmer.', error });
    }
});

// Update Farmer
router.put('/update/:id', async (req, res) => {
    try {
        const farmerId = req.params.id;
        const updates = req.body;

        const updatedFarmer = await Farmer.findByIdAndUpdate(
            farmerId,
            { ...updates, updatedAt: Date.now() },
            { new: true }
        );

        if (!updatedFarmer) {
            return res.status(404).json({ message: 'Farmer not found.' });
        }

        res.json({ message: 'Farmer updated successfully.', farmer: updatedFarmer });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error updating farmer.', error });
    }
});
router.get('/farmers', async (req, res) => {
    try {
        const farmers = await Farmer.find();
        res.json({ farmers });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error fetching farmers.', error });
    }
});

// Get Farmer by ID
router.get('/farmer/:id', async (req, res) => {
    try {
        const farmerId = req.params.id;
        const farmer = await Farmer.findById(farmerId);

        if (!farmer) {
            return res.status(404).json({ message: 'Farmer not found.' });
        }

        res.json({ farmer });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error fetching farmer.', error });
    }
});
module.exports = router;
