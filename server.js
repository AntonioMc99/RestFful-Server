// Load environment variables FIRST
require('dotenv').config();

const express = require('express');
const app = express();

// (Optional) body parsing; not required for GET but harmless
app.use(express.json());

// Mount routes under /api
const movieRoutes = require('./routes/movieRoutes');
app.use('/api', movieRoutes);

const PORT = process.env.PORT || 3001;

app.get('/', (req, res) => {
  res.send('Movie Finder API is running. Try /api/search?title=batman');
});

app.listen(PORT, () => {
  console.log(`Movie Finder API running on http://localhost:${PORT}`);
});
