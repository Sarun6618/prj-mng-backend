const express = require('express');
const router = express.Router();
const Mouse = require('../models/Mouse');

router.get('/Mouse/Mousefetch', async (req, res) => {
  try {
    const MouseData = await Mouse.find({});
    res.render('Mousefetch', { MouseData });
  } catch (error) {
    console.log(error.message);
    res.status(500).send('Error fetching data from MongoDB');
  }
});

module.exports = router;
