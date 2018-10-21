const request = require('supertest');
const expect = require('expect');

var app = require('./server').app;

describe('server', () => {

  describe('#/' , () => {
    it('should return hello world response', (done) => {
      request(app)
        .get('/')
        .expect(404)
        .expect( (res) => {
          expect(res.body).toInclude({
            error: 'Page not found.'
          });
        })
        .end(done);
    });
  });

  describe('#/users', () => {

    it('Should have my name , and valid response!', (done) => {
      request(app)
      .get('/users')
      .expect(200)
      .expect((res) => {
        expect(res.body).toInclude({
          name: 'Eminem',
          age: 45
        });
      })
      .end(done);
    });
  });

});
