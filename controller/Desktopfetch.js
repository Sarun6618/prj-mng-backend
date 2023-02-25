const express = require('express');
const router = express.Router();
const Desktop = require('../models/Desktop');

router.get('/Desktop/Desktopfetch', async (req, res) => {
  try {
    const desktopData = await Desktop.find({});
    res.render('Desktopfetch', { desktopData });
  } catch (error) {
    console.log(error.message);
    res.status(500).send('Error fetching data from MongoDB');
  }
});

module.exports = router;
