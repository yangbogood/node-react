import express from 'express';

import userData from '../InitData/users'

import Admin from '../controller/admin/admin'
console.info(Admin)
var admin = express.Router();
admin.post('/login', Admin.login)
admin.get('/all', Admin.getAllAdmin);


export default admin;