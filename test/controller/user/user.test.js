const {app, mock, assert} = require('egg-mock/bootstrap');

describe('test/controller/user/user.test.js', () => {
    describe('POST /', () => {
        it('should status 200 and get the request body', () => {
            app.mockCsrf();
            return app.httpRequest()
                .post('/login')
                .type('form')
                .send({
                    userName: 'bar',
                    userPwd:'hh'
                })
                .expect(200)
                .expect('Content-Type', /json/)
                .then(response => {
                    assert(response.body.data, false);
                });
        });

        it('should status 200 and get the request body', () => {
            app.mockCsrf();
            return app.httpRequest()
                .post('/login')
                .type('form')
                .send({
                    userName: 'bar',
                    userPwd:'123'
                })
                .expect(200)
                .expect('Content-Type', /json/)
                .then(response => {
                    assert(response.body.data, true);
                });
        });
    })
});