const dummyModel = require('../models/dummymodel');

// Controller to handle prediction
const predictFailure = (req, res) => {
  const input = req.body;

  if (!input) {
    return res.status(400).json({ error: "Input data missing!" });
  }

  const prediction = dummyModel(input);
  res.json({ prediction });
};

module.exports = { predictFailure };
