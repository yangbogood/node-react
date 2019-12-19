import AdminModel from '../../models/admin/admin.js'
import AddressComponent from '../../prototype/addressComponent'
import crypto from 'crypto';
import formidable from 'formidable';
import dtime from 'time-formater';



class Admin extends AddressComponent {
    constructor() {
        super();
        this.login = this.login.bind(this)
            // this.register = this.register.bind(this)
            // this.encryption = this.encryption.bind(this)
            // this.updateAvatar = this.updateAvatar.bind(this)
    }

    async login(req, res, next) {
        const form = new formidable.IncomingForm();
        form.parse(req, async(err, fields, files) => {
            if (err) {
                res.send({
                    status: 0,
                    type: 'FORM_DATA_ERROR',
                    message: '表单信息错误'
                })
                return
            }
            const { user_name, password, status = 1 } = fields;
            try {
                if (!user_name) {
                    throw new Error('用户名参数错误')
                } else if (!password) {
                    throw new Error('密码参数错误')
                }
            } catch (err) {
                console.log(err.message, err);
                res.send({
                    status: 0,
                    type: 'GET_ERROR_PARAM',
                    message: err.message,
                })
                return
            }
            const newpassword = this.encryption(password);
            try {
                const admin = await AdminModel.findOne({ user_name })
                if (!admin) {
                    const adminTip = status == 1 ? '管理员' : '超级管理员'
                    const admin_id = await this.getId('admin_id');
                    const cityInfo = await this.guessPosition(req);
                    const newAdmin = {
                        user_name,
                        password: newpassword,
                        id: admin_id,
                        create_time: dtime().format('YYYY-MM-DD HH:mm'),
                        admin: adminTip,
                        status,
                        city: cityInfo.city
                    }
                    await AdminModel.create(newAdmin)
                    req.session.admin_id = admin_id;
                    res.send({
                        status: 1,
                        success: '注册管理员成功',
                    })
                } else if (newpassword.toString() != admin.password.toString()) {
                    console.log('管理员登录密码错误');
                    res.send({
                        status: 0,
                        type: 'ERROR_PASSWORD',
                        message: '该用户已存在，密码输入错误',
                    })
                } else {
                    req.session.admin_id = admin.id;
                    res.send({
                        status: 1,
                        success: '登录成功'
                    })
                }
            } catch (err) {
                console.log('登录管理员失败', err);
                res.send({
                    status: 0,
                    type: 'LOGIN_ADMIN_FAILED',
                    message: '登录管理员失败',
                })
            }
        })
    }

    async getAllAdmin(req, res, next) {
        const { limit = 20, offset = 0 } = req.query;
        try {
            const allAdmin = await AdminModel.find({}, '-_id -password').sort({ id: -1 }).skip(Number(offset)).limit(Number(limit))
            res.send({
                status: 1,
                data: allAdmin,
            })
        } catch (err) {
            console.log('获取超级管理列表失败', err);
            res.send({
                status: 0,
                type: 'ERROR_GET_ADMIN_LIST',
                message: '获取超级管理列表失败'
            })
        }
    }
}


export default new Admin();