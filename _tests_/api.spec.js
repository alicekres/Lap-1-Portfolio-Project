const app = require('../app');
const request = require('supertest');

describe('server tests', () => {
  let api;
  beforeAll(() => {
    api = app.listen(5000, () => {
      console.log('API test server is running');
    });
  });

  test('it responds to GET / with status 200', (done) => {
    request(api).get('/').expect(200, done);
  });

  test('it responds to POST / with status 405', (done) => {
    request(api).post('/').expect(405, done);
  });

  test('it responds to GET /attractions with status 200', (done) => {
    request(api).get('/attractions').expect(200, done);
  });

  test('it responds to GET /general with status 200', (done) => {
    request(api).get('/general').expect(200, done);
  });

  test('it responds to GET /places with status 200', (done) => {
    request(api).get('/places').expect(200, done);
  });

  test('it responds to GET /attractions/1 with status 200', (done) => {
    request(api).get('/attractions/1').expect(200, done);
  });

  test('it responds to GET /attractions/0 with status 404', (done) => {
    request(api).get('/attractions/0').expect(404, done);
  });

  test('it responds to GET /general/1 with status 200', (done) => {
    request(api).get('/general/1').expect(200, done);
  });

  test('it responds to GET /general/70 with status 404', (done) => {
    request(api).get('/general/70').expect(404, done);
  });

  test('it responds to GET /places/1 with status 200', (done) => {
    request(api).get('/places/1').expect(200, done);
  });

  test('it responds to GET /places/0 with status 404', (done) => {
    request(api).get('/places/0').expect(404, done);
  });

  test('it responds to POST /attractions with status 201', (done) => {
    request(api).post('/attractions').expect(201, done);
  });

  test('it responds to POST /general with status 201', (done) => {
    request(api).post('/general').expect(201, done);
  });

  test('it responds to POST /places with status 201', (done) => {
    request(api).post('/places').expect(201, done);
  });

  afterAll((done) => {
    console.log('API test server is now closing');
    api.close(done);
  });
});
