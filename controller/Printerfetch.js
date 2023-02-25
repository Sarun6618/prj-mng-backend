const express = require('express');
const router = express.Router();
const Printer = require('../models/Printer');

router.get('/Printer/Printerfetch', async (req, res) => {
  try {
    const PrinterData = await Printer.find({});
    res.render('Printerfetch', { PrinterData });
  } catch (error) {
    console.log(error.message);
    res.status(500).send('Error fetching data from MongoDB');
  }
});

module.exports = router;
