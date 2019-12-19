'use strict';
import express from 'express';
import userData from '../InitData/users'
var userRouter = express.Router();

/* GET users listing. */
userRouter.get('/', function(req, res, next) {
    res.send(userData);
});

export default userRouter;