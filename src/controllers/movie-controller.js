const db = require('../model');
const Movie = db.movies;
const Actor = db.actors;

exports.insertMovie = async (req, res, next) => {
    try {
        const { actorid } = req.params;
        const { movieName, year } = req.body;
        const newMovie = await Movie.create({ movieName, year })
        const actor = await Actor.findByPk(actorid);
        await newMovie.addActor(actor, { through: "ActorMovies" })


        const result = await Movie.findAll({ include: Actor })

        res.json(result);
    } catch (error) {
        next(error)
    }
}