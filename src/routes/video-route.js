const { Router } = require('express');
const { insertVideo } = require('../controllers/video-controller');

const videoRouter = Router({mergeParams:true});

videoRouter.post('/insertvideo', insertVideo);

module.exports = videoRouter;