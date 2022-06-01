'use strict';

const server = require('../src/server');
const supertest = require('supertest');
const request = supertest(server.app);

describe('testing person route', () => {
  test('500 if no name in the query string', async () => {
    const response = await request.get('/person?name=');
    expect(response.status).toEqual(500);
  });

  test('200 if the name is in the query string', async () => {
    const response = await request.get('/person?name=randomString');
    expect(response.status).toEqual(200);
  });

  test('given an name in the query string, the output object is correct', async () => {
    const response = await request.get('/person?name=sohaib');
    expect(response.body).toEqual({ name: 'sohaib' });
  });
});