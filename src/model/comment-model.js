const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    const Comment = sequelize.define('comment', {
        comment: {
            type: DataTypes.STRING,
            allownull: false,
            validate: {
                len: [3, 30]
            }
        },
        deletedBy: {
            type: DataTypes.INTEGER,
        }
    }, {
        paranoid: true
    })

    return Comment;
}