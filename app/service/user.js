const Service = require('egg').Service;

class UserService extends Service {
    async find(uid) {
        // 假如 我们拿到用户 id 从数据库获取用户详细信息
        const user = await this.app.mysql.get('users', { id: 11 });
        return { user };
    }

    async insert(user){
        const result =await this.app.mysql.insert('bas_user',{user_name:'test'});
        console.log(result);
    }
}

module.exports = UserService;