import AddressComponent from '../../prototype/addressComponent'
import LoginModel from '../../models/login/index';
import UserInfoModel from '../../models/userInfo/index';
import formidable from 'formidable'
import crypto from 'crypto'
import dtime from 'time-formater'

class Login extends AddressComponent {
    constructor() {
        super();
        this.login = this.login.bind(this);
        this.encryption = this.encryption.bind(this)
        this.Md5 = this.Md5.bind(this);
    }
    async login(req, res, next) {
        const cap = req.cookies.cap;
        if (!cap) {
            console.log('验证码失效')
            res.send({
                status: 0,
                type: 'ERROR_CAPTCHA',
                message: '验证码失效',
            })
            return
        } else {
            // const form = new formidable.IncomingForm();　
            const { username, password, captcha_code } = req.body;
            try {
                if (!username) {
                    throw new Error('用户名参数错误');
                } else if (!password) {
                    throw new Error('密码参数错误');
                } else if (!captcha_code) {
                    throw new Error('验证码参数错误');
                }
            } catch (err) {
                console.log('登陆参数错误', err);
                res.send({
                    status: 0,
                    type: 'ERROR_QUERY',
                    message: err.message,
                })
                return
            }
            if (cap.toString() !== captcha_code.toString()) {
                res.send({
                    status: 0,
                    type: 'ERROR_CAPTCHA',
                    message: '验证码不正确',
                })
                return
            }
            console.info(password)
            const newpassword = this.encryption(password);
            console.info(newpassword)
            try {
                console.info(LoginModel)
                const user = await LoginModel.findOne({ username });
                if (!user) {
                    const user_id = await this.getId('user_id'); // 获取user_id
                    const cityInfo = await this.guessPosition(req); // 获取城市信息
                    const registe_time = dtime().format('YYYY-MM-DD HH:mm');
                    const newUser = { username, password: newpassword, user_id };
                    const newUserInfo = { username, user_id, id: user_id, city: cityInfo.city, registe_time, };
                    LoginModel.create(newUser);
                    const createUser = new UserInfoModel(newUserInfo);
                    const userinfo = await createUser.save();
                    req.session.user_id = user_id;
                    console.info(userinfo)
                    res.send(userinfo);
                } else if (user.password.toString() !== newpassword.toString()) {
                    res.send({
                        status: 0,
                        type: 'ERROR_PASSWORD',
                        message: '密码错误',
                    })
                } else {
                    req.session.user_id = user.user_id;
                    console.info(user)
                    const userinfo = await UserInfoModel.findOne({ user_id: Number(user.user_id) }, '-_id');
                    res.send(userinfo)
                }
            } catch (error) {

            }
        }

    }
    encryption(password) {
        const newpassword = this.Md5(this.Md5(password).substr(2, 7) + this.Md5(password));
        return newpassword
    }
    Md5(password) {
        const md5 = crypto.createHash('md5');
        return md5.update(password).digest('base64');
    }
}


export default new Login();