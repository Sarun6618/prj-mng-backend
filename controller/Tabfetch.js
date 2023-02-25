const express = require('express');
const router = express.Router();
const Tab = require('../models/Tab');

router.get('/Tab/Tabfetch', async (req, res) => {
  try {
    const TabData = await Tab.find({});
    res.render('Tabfetch', { TabData });
  } catch (error) {
    console.log(error.message);
    res.status(500).send('Error fetching data from MongoDB');
  }
});

module.exports = router;
