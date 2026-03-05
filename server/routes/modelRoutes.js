const express = require('express');
const router = express.Router();
const { predictFailure } = require('../controllers/modelcontroller');

// POST /api/predict
router.post('/predict', predictFailure);

module.exports = router;
