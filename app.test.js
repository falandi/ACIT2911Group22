import 'regenerator-runtime/runtime'
import 'isomorphic-fetch'
const app = require('./app') // Link to your server file
const supertest = require('supertest')
const request = supertest(app)
jest.setTimeout(17000);


jest.useRealTimers();

//testing app endpoints
describe('Test endpoints', () => {
  it('tests the homepage get request', async () => {
    const response = await request.get('/')
    expect(response.statusCode).toBe(200)

  }, 15000);

  it('tests the to-do get request', async () => {
    const response = await request.get('/to-do-list')
    expect(response.statusCode).toBe(200)
  
  }), 15000;

});

