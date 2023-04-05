const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    const Image =  sequelize.define('image',{
        title: DataTypes.STRING,
        imageUrl: DataTypes.STRING
    }, {
        timestamps: false
    })
    return Image
}