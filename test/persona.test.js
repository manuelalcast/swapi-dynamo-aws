const supertest = require('supertest');
const app = require('../index')

const api = supertest(app);

test('obtener persona' ,  async () => {
    await api
        .get('/persona')
        .expect(200)
        .expect('Content-Type', "application/json; charset=utf-8")
});


test('obtener persona id' ,  async () => {
    await api
        .get('/persona')
        .expect(200)
        .expect('Content-Type', "application/json; charset=utf-8")
});
