const { DataTypes } = require("sequelize");


module.exports = (sequelize) => {
    const Actor = sequelize.define('actor',{
        actorName: {
            type: DataTypes.STRING
        },
        age: {
            type: DataTypes.INTEGER,
            default: 20
        }
    }) 
    return Actor;
}