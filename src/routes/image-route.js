const { Router } = require('express');
const { insertImage, createComment, findCommentOnImage } = require('../controllers/image-controller');
const imageRouter = Router({mergeParams:true});

imageRouter.post('/insertimage', insertImage);

imageRouter.post('/createComment/:id', createComment);

imageRouter.get('/getComment', findCommentOnImage);


module.exports = imageRouter;