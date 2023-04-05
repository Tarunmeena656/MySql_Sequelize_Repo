const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    const Post = sequelize.define('post', {
        title: {
            type: DataTypes.STRING,
            allownull: false
        },
        content: {
            type: DataTypes.STRING,
            allownull: false
        }
    })

    return Post;
}