const db = require('../model');
const Video = db.videos;

exports.insertVideo = async (req,res,next) => {
    try {
        const { title, videoUrl } = req.body;
        const newVideo = await Video.create({title,videoUrl});
        res.json(newVideo);
    } catch (error) {
        next(error)
    }
}