const { Router } = require('express');
const { insertMovie } = require('../controllers/movie-controller');


const movieRouter = Router();

movieRouter.post('/insertmovie/:actorid', insertMovie);


module.exports = movieRouter;

