const Controller = require('egg').Controller;

class UserController extends Controller {
    async insert() {
        const user = {};

        user.user_name = 'test';
        user.password = 'hh';

        this.service.user.insert(user);

    }

    async login(User ){

    }
}

module.exports = UserController;