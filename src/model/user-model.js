const { DataTypes } = require('sequelize');
const bcrypt = require('bcrypt');

module.exports = (sequelize) => {
    const User = sequelize.define('user', {

        firstname: {
            type: DataTypes.STRING,
            allowNull: false
        },
        lastname: {
            type: DataTypes.STRING,
        },
        city: {
            type: DataTypes.STRING
        },
        age: {
            type: DataTypes.INTEGER
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false
        },
        fullname: {
            type: DataTypes.VIRTUAL,
            get() {
                return `${this.firstname} ${this.lastname}`
            }
        }
    })
    
    User.beforeCreate(async (user) => {
        user.password = await bcrypt.hash(user.password, 10);
    })

    return User;
}
