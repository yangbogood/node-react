import express from 'express';
import Captchas from '../controller/v1/captchas';
const v1Router = express.Router();

/* 获取验证码 */
v1Router.post('/captchas', Captchas.getCaptchas);


export default v1Router;