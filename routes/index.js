"use strict"
import user from './users';
import admin from './admin';
export default app => {
    app.use('/users', user);
    app.use('/admin', admin)
};