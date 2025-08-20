const express = require('express');
const router = express.Router();

const {
  searchMovies,
  getMovieDetails
} = require('../movie-finder-api/controllers/movieController');

// GET /api/search?title=batman
router.get('/search', searchMovies);

// GET /api/movies/:id
router.get('/movies/:id', getMovieDetails);

module.exports = router;
