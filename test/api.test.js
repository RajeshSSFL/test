const request = require('supertest');
const app = require('../app'); // Path to your Express app

describe('GET /', () => {
  it('should return status 200', async () => {
    const response = await request(app).get('/');
    expect(response.status).toBe(200);
  });
});

describe('GET /test', () => {
  it('should return status 200', async () => {
    const response = await request(app).get('/test');
    expect(response.status).toBe(200);
  });
});
