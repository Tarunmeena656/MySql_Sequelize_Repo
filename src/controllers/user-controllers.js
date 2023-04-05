const db = require('../model');
const User = db.users;
const Post = db.posts;
const sequelize = db.sequelize;
const { QueryTypes, Op } = require('sequelize');

exports.createUser = async (req, res, next) => {
    try {
        const { firstname, lastname, city, age, password } = req.body;
        const user = await User.create({ firstname, lastname, city, age, password });
        res.json(user);
    } catch (error) {
        next(error)
    }
}

exports.deleteUser = async (req, res, next) => {
    try {
        const { id } = req.params;
        await User.destroy({
            where: {
                id
            }
        });
        res.json('user deleted');
    } catch (error) {
        next(error)
    }
}

exports.findAllUser = async (req, res, next) => {
    try {
        const users = await User.findAll({
            order: [['age', 'asc']],
            where: {
                city: 'bhopal'
            },
            attributes: { exclude: ['id'] },

        })
        res.json(users);
    } catch (error) {
        next(error)
    }
}

exports.findById = async (req, res, next) => {
    try {
        const { id } = req.params;
        console.log('arrived')
        const user = await User.findByPk(id);
        res.json(user);
    } catch (error) {
        next(error)
    }
}

exports.updateUser = async (req, res, next) => {
    try {
        const { id } = req.params;
        await User.update({ ...req.body }, { where: { id } })
        res.json('user updated');
    } catch (error) {
        next(error)
    }
}

exports.rawQuery = async (req, res, next) => {
    try {
        const results = await sequelize.query(`select * from users where city IN (:city)`, {
            replacements: { city: ['bhopal', 'sagar'] },
            // type: QueryTypes.SELECT,
            // raw: false,
            model: User,
            mapToModel: true,
            plain: false, // it will return only one record if true; default: false;

        });
        console.log(results)
        res.json(results);
    } catch (error) {
        next(error)
    }
}

exports.wherePractice = async (req, res, next) => {
    try {
        const { id } = req.params;
        // const users = await User.findAll({
        //     include: {
        //         all: true,
        //         nested: true,
        //         paranoid: false
        //     },
        //     order: [
        //         ['Post', 'userId', desc]
        //     ]
        // })

        const users = await User.findAll(

            {
                include: {
                    model: Post,
                    right: true
                }
            })
        res.json(users);
    } catch (error) {
        next()
    }
}

exports.associationCreate = async (req, res, next) => {
    try {
        const { firstname, lastname, age, city, password, title, content } = req.body;
        const users = await User.create({
            firstname, lastname, age, password,
            posts: {
                title, content
            }
        }, {
            include: [db.userPost]
        })
        res.json(users);
    } catch (error) {
        next(error)
    }
}