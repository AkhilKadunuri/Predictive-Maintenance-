const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());

// Test GET route (optional)
app.get('/', (req, res) => {
  res.send('Backend server is running!');
});

// Import & use predict route
const modelRoutes = require('./routes/modelRoutes');
app.use('/api', modelRoutes);

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
