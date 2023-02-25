const Desktop = require('../models/Desktop');

const getAllDesktops = async (req, res) => {
  try {
    const desktopData = await Desktop.find({});
    res.status(200).json(desktopData);
  } catch (error) {
    console.log(error.message);
    res.status(500).send('Error fetching data from MongoDB');
  }
};

module.exports = getAllDesktops;
