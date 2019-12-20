"use strict"
import user from './users';
import admin from './admin';
import v1 from './v1';
import login from './login'

export default app => {
    app.use('/users', user);
    app.use('/admin', admin)
    app.use('/v1', v1)
    app.use('/', login)

};