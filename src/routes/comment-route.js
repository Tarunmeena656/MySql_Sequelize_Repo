const { Router } = require('express');
const { createComment } = require('../controllers/comment-controller');


const commentRouter = Router({mergeParams: true});

commentRouter.post('/createcomment/:postid', createComment);

module.exports = commentRouter;
