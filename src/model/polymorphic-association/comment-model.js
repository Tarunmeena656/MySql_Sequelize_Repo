const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    const Comment = sequelize.define('polycomment',{
        comment: {
            type: DataTypes.STRING,
        },
        commentableType: {
            type: DataTypes.STRING
        },
        commentableId: {
            type: DataTypes.INTEGER
        }
    }, {
        timestamps: false
    })
    return Comment
}