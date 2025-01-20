// app.test.js
const request = require('supertest');
const app = require('../app');  // Import the app from app.js

describe('GET /', () => {
  it('should return status 200 and "Hello, World!"', async () => {
    const response = await request(app).get('/');  // Make GET request to the root
    expect(response.status).toBe(200);  // Assert that the status code is 200
    expect(response.text).toBe('Hello, World!');  // Assert the response body
  });
});

describe('GET /productList', () => {
  it('should return status 200 and "NewProduct!"', async () => {
    const response = await request(app).get('/product');  // Make GET request to the root
    expect(response.status).toBe(200);  // Assert that the status code is 200
    expect(response.text).toBe('NewProduct!');  // Assert the response body
  });
});

