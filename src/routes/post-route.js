const { Router } = require('express');
const { createPost, findPostById, findAllPost } = require('../controllers/post-controller');

const postRouter = Router({mergeParams: true});

postRouter.post('/createpost/:userid', createPost);

postRouter.get('/fetchpost/:postid', findPostById);

postRouter.get('/fetchallpost', findAllPost);

module.exports = postRouter;
