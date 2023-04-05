const db = require('../model');
const Actor = db.actors;
const Movie = db.movies;

exports.createActor = async (req, res, next) => {
    try {
        const { movieid } = req.params;
        const { actorName, age } = req.body;
        const newActor = await Actor.create({ actorName, age });
        const movie = await Movie.findByPk(movieid);
        await newActor.addMovie(movie, { through: "ActorMovies" });

        const result = await Actor.findAll({ include: Movie });

        res.json(result);

    } catch (error) {
        next(error)
    }
}