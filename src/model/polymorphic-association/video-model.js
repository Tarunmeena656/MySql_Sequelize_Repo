const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    const Video =  sequelize.define('video',{
        title: DataTypes.STRING,
        videoUrl: DataTypes.STRING
    }, {
        timestamps: false
    })
    return Video
}