const express = require('express');
const router = express.Router();
const { processData } = require('../controllers/dataController');
const dummyData = require('../../data/dummyData.json');

// Middleware to attach data to the request object
router.use((req, res, next) => {
  req.data = dummyData;
  next();
});

// Route to fetch all data
router.get('/data', (req, res) => {
  processData(req, res);
});

// Route to filter and sort data
router.get('/data/filter', (req, res) => {
  processData(req, res);
});

module.exports = router;
