module.exports = app => {
    const { router, controller } = app;
    router.get('/home', controller.home.index);
    router.get('/saveUser',controller.user.insert);
};