const { DataTypes } = require("sequelize");


module.exports = (sequelize) => {
    const Movie = sequelize.define('movie',{
        movieName: {
            type: DataTypes.STRING
        },
        year: {
            type: DataTypes.INTEGER,
            default: 2000
        }
    }) 
    return Movie;
}