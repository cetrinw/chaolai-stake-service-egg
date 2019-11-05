const BaseController = require('../core/base_controller');

class HomeController extends BaseController {
    async index() {
        this.ctx.body = 'Hello world';
    }
}

module.exports = HomeController;