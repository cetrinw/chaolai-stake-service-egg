const BaseController = require('../../core/base_controller');

class UserController extends BaseController {

    async sayHello() {
        this.ctx.body = 'Hello world';
    }

    async insert() {
        const user = {};

        user.user_name = 'test';
        user.password = 'hh';

        this.service.user.insert(user);

    }

    /**
     * 登录校验
     * @returns {Promise<{code: number, data: *}>}
     */
    async login() {

        const loginRule = {
            userName: {type: 'string'},
            userPwd: {type: 'string'}
        }

        // this.ctx.validate(loginRule);
        super.success(this.service.user.checkUserLogin(this.ctx.request.body));
    }
}

module.exports = UserController;