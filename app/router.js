module.exports = app => {
    const { router, controller } = app;
    router.get('/home', controller.home.index);
    router.get('/user', controller.user.user.sayHello);
    router.get('/saveUser',controller.user.user.insert);
    router.post('userLogin','/login',controller.user.user.login);
};