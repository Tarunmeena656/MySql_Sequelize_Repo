const { Router } = require('express');
const { createActor } = require('../controllers/actor-controller');

const actorRouter = Router();

actorRouter.post('/createactor/:movieid', createActor);


module.exports = actorRouter;

