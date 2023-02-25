const express = require('express');
const router = express.Router();
const Laptop = require('../models/Laptop');

router.get('/Laptop/Laptopfetch', async (req, res) => {
  try {
    const LaptopData = await Laptop.find({});
    res.render('Laptopfetch', { LaptopData });
  } catch (error) {
    console.log(error.message);
    res.status(500).send('Error fetching data from MongoDB');
  }
});

module.exports = router;
