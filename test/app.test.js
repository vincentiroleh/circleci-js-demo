const chai = require('chai');
const request = require('supertest');
const app = require('../app');

const expect = chai.expect;

describe('GET /', () => {
  it('should return 200 OK with "Hello, World!"', (done) => {
    request(app)
      .get('/')
      .end((err, res) => {
        expect(res.statusCode).to.equal(200);
        expect(res.text).to.equal('Hello, World!');
        done();
      });
  });
});
