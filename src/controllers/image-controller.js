const db = require('../model');
const Image = db.images;
const Video = db.videos;
const PolyComment = db.polyComments
const  createError = require('http-errors');

exports.insertImage = async (req,res,next) => {
    try {
        const { title, imageUrl } = req.body;
        const newImage = await Image.create({title,imageUrl});
        res.json(newImage);
    } catch (error) {
        next(error)
    }
}

exports.createComment = async (req,res,next) => {
    try {
        const { id } = req.params;
        const { comment, commentableType} = req.body;
        if(commentableType === 'video') {
            const isVideoExist = await Video.findByPk(id);
            if(!isVideoExist) throw createError.NotFound('video not found');
            var newComment = await PolyComment.create({comment, commentableType, commentableId: id});
        } else {
            const isImageExist = await Image.findByPk(id);
            if(!isImageExist) throw createError.NotFound('image not found');
            newComment = await PolyComment.create({comment, commentableType, commentableId: id});
        }
        res.json(newComment)
    } catch (error) {
        next(error)
    }
}

exports.findCommentOnImage = async (req,res,next) => {
    try {
        const findComment = await Image.findAll({
            include: {
                model: PolyComment
            }
        })
        res.json(findComment);
    } catch (error) {
        next(error)
    }
}