const { Router } = require('express');
const imageRouter = require('./image-route');
const actorRouter = require('./actor-route');
const commentRouter = require('./comment-route');
const movieRouter = require('./movie-route');
const postRouter = require('./post-route');
const userRouter = require('./user-route');
const videoRouter = require('./video-route');


const indexRouter = Router({mergeParams:true});


indexRouter.use('/users/',userRouter);

indexRouter.use('/posts/', postRouter);

indexRouter.use('/comment/', commentRouter);

indexRouter.use('/actors', actorRouter);

indexRouter.use('/movies', movieRouter);

indexRouter.use('/images', imageRouter);

indexRouter.use('/videos', videoRouter);



module.exports = indexRouter;