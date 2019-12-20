import mongoose from 'mongoose'

const Schema = mongoose.Schema;

const loginSchema = new Schema({
    user_id: Number,
    username: String,
    password: String,
})

const Login = mongoose.model('Login', loginSchema);

export default Login