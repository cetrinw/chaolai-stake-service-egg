const Service = require('egg').Service;

class UserService extends Service {
    async find(uid) {
        // 假如 我们拿到用户 id 从数据库获取用户详细信息
        const user = await this.app.mysql.get('users', {id: 11});
        return {user};
    }

    async insert(user) {
        const result = await this.app.mysql.insert('bas_user', {user_name: 'test'});
        console.log(result);
    }

    async checkUserLogin(user) {
        const result = await this.app.mysql.query(
            'select buk.user_key as userKey from bas_user bu ' +
            'inner join bas_user_key buk on buk.user_id = bu.user_id where bu.user_name = ?', [user.userName]);

        //todo 解码
        if (user.userPwd === result.userKey) {
            return true;
        } else {
            return false;
        }
    }
}

module.exports = UserService;