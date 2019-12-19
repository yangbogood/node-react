'use strict';
import express from 'express';
import userData from '../InitData/users'
var userRouter = express.Router();

/* GET users listing. */
userRouter.get('/user', function(req, res, next) {
    res.send(userData);
});



export default userRouter;