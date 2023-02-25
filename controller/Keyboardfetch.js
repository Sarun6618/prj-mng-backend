const express = require('express');
const router = express.Router();
const Keyboard = require('../models/Keyboard');

router.get('/Keyboard/Keyboardfetch', async (req, res) => {
  try {
    const KeyboardData = await Keyboard.find({});
    res.render('Keyboardfetch', { KeyboardData });
  } catch (error) {
    console.log(error.message);
    res.status(500).send('Error fetching data from MongoDB');
  }
});

module.exports = router;
