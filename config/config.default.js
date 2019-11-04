//cookie过期时间
const date = new Date();
date.setDate(date.getDate() + 7);
exports.keys = 'userName=cetrinw;expires=' + date;

module.exports = appInfo => {
    const config = {};
    config.keys = 'cetrinw';

    config.mysql = {
        // 单数据库信息配置
        client: {
            // host
            host: 'localhost',
            // 端口号
            port: '3306',
            // 用户名
            user: 'root',
            // 密码
            password: '123',
            // 数据库名
            database: 'cetrinw',
        },
        // 是否加载到 app 上，默认开启
        app: true,
        // 是否加载到 agent 上，默认关闭
        agent: false,
    };

    return config;
};

