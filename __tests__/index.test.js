process.env.NODE_ENV = 'test';

const request = require('supertest');

const app = require('../app');
const db = require('../db/connection');
const seed = require('../db/seeds/seed');
const data = require('../db/data/test-data');

describe('/', () => {
  beforeEach(() => seed(data));
  afterAll(() => db.end());

  describe('/users', () => {
    it('GET list of users', async () => {
      const { body } = await request(app).get('/users').expect(200);
      expect(body.users[1].name).toBe('tech access');
    });
    it('return correct user given a user id', async () => {
      const { body } = await request(app).get('/users/1').expect(200);
      expect(body.name).toBe('JD');
    });
    it('can create a new user', async () => {
      const nUser ={name: "JD2", email: "jd@gmail.com", password: "letmein"};
      const result = await request(app)
      .post(`/users/`)
      .send(nUser);
      expect(result._body.name).toBe('JD2');
    });
  });
  

}); 
