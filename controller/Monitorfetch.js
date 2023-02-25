const express = require('express');
const router = express.Router();
const Monitor = require('../models/Monitor');

router.get('/Monitor/Monitorfetch', async (req, res) => {
  try {
    const MonitorData = await Monitor.find({});
    res.render('Monitorfetch', { MonitorData });
  } catch (error) {
    console.log(error.message);
    res.status(500).send('Error fetching data from MongoDB');
  }
});

module.exports = router;
