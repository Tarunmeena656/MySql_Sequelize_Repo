const db = require('../model');
const Comment = db.comments;

exports.createComment = async (req,res,next) => {
    try {
        const { comment } = req.body;
        const { postid } = req.params;
        const newcomment = await Comment.create({comment, postId:postid})
        res.json(newcomment);
    } catch (error) {
        next(error)
    }
}