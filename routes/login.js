import express from 'express';
import Login from '../controller/login/index';
import bodyParser from 'body-parser';
const loginRouter = express.Router()


loginRouter.post('/login', Login.login)


export default loginRouter;