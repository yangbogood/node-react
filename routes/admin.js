import express from 'express';

import userData from '../InitData/users'
var admin = express.Router();

admin.get('/', function(req, res, next) {
    res.send(userData);
});


export default admin;