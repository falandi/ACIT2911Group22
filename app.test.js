import 'regenerator-runtime/runtime'
import 'isomorphic-fetch'
const app = require('./app') // Link to your server file
const supertest = require('supertest')
const request = supertest(app)


jest.useRealTimers();
describe('Test endpoints', () => {
  it('tests the homepage get request', async done => {
    const response = await request.get('/')
    expect(response.status).toBe(200)

  }, 15000);

  it('tests the to-do get request', async done => {
    const response = await request.get('/to-do-list')
    expect(response.status).toBe(200)
  
  }), 15000;

});

