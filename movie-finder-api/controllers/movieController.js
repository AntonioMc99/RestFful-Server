const axios = require('axios');
const OMDB_BASE_URL = 'http://www.omdbapi.com/';

async function searchMovies(req, res) {
  try {
    const title = (req.query.title || '').trim();
    if (!title) {
      return res.status(400).json({ error: 'Title query parameter is required' });
    }

    const response = await axios.get(OMDB_BASE_URL, {
      params: { s: title, apikey: process.env.OMDB_API_KEY }
    });

    return res.json(response.data);
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ error: 'Failed to fetch movie search results' });
  }
}

async function getMovieDetails(req, res) {
  try {
    const id = req.params.id;
    const response = await axios.get(OMDB_BASE_URL, {
      params: { i: id, apikey: process.env.OMDB_API_KEY }
    });

    return res.json(response.data);
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ error: 'Failed to fetch movie details' });
  }
}

module.exports = { searchMovies, getMovieDetails };
