const { sequelize } = require('../model');
const db = require('../model');
const Post = db.posts;
const User = db.users;

exports.createPost = async (req,res,next) => {
    try {
        const { userid } = req.params;
        const { title, content } = req.body;
        const newPost = await Post.create({title,content, userId: userid});
        res.json(newPost);
    } catch (error) {
        next(error)
    }
}

exports.findPostById = async (req,res,next) => {
    try {
        const { postid } = req.params;
        const post = await Post.findByPk(postid, {include: {model: User}}); // eager loading
        // const user = await post.getUser(); // lazy loading
        // console.log(user.firstname);
        res.json(post);
    } catch (error) {
        next(error)
    }
}


exports.findAllPost = async (req,res,next) => {
    try {
        const { postid } = req.params;
        const posts = await Post.findAll({include: {model: User, required: false}}); 


        // const posts = await Post.findAll({
        //     include: User,
        //     where: {
        //         id: sequelize.col('post.userId')
        //     }
        // })

        res.json(posts);
    } catch (error) {
        next(error)
    }
}
