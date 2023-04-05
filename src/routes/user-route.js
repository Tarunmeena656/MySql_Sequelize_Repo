const { Router } = require('express');
const { createUser, deleteUser, findAllUser, findById, updateUser, rawQuery, wherePractice, associationCreate } = require('../controllers/user-controllers');

const userRouter = Router({mergeParams:true});


userRouter.post('/register', createUser);

userRouter.delete('/delete/:id', deleteUser);

userRouter.get('/', findAllUser);

userRouter.get('/:id', findById);

userRouter.put('/:id', updateUser);

userRouter.get('/raw/query', rawQuery);

userRouter.get('/wherepractice/:id', wherePractice);

userRouter.post('/association-create', associationCreate);

module.exports = userRouter;