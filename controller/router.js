const express = require('express');
const router = express.Router();
const MongoClient = require('mongodb').MongoClient;
const ObjectId = require('mongodb').ObjectId;

router.get('/export', (req, res) => {
  MongoClient.connect('mongodb://127.0.0.1:27017/AssetsData', (err, client) => {
    if (err) {
      res.status(500).send({error: 'Error connecting to the database'});
    } else {
      const db = client.db('AssetsData');
      const collection = db.collection('Desktop');
      collection.find({}).toArray((error, data) => {
        if (error) {
          res.status(500).send({error: 'Error retrieving data from the database'});
        } else {
          res.setHeader('Content-Type', 'application/json');
          res.setHeader('Content-Disposition', 'attachment; filename=data.json');
          res.send(JSON.stringify(data, null, 2));
        }
        client.close();
      });
    }
  });
});

module.exports = router;
