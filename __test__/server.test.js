'use strict';

const  { server } = require('../src/server.js');
const supertest = require('supertest'); //mock request engine

const mockRequest = supertest(server); //start and initialize our server

describe('***Web Server***:', () => {
  it('should resond with a 404 on not found', () => {
    return mockRequest.get('./no-thing').then(data => {
      expect(data.status).toBe(404);
    })
  })

  it('should resond with a 500 on an error', () => {
    
  })
  
  it('should resond with a GET: /hello', async () => {
    const response = await mockRequest.get('/hello');
    expect(response.status).toBe(200); //test for status code
    expect(response.text).toBe('hello world!'); //test your output
    // HINT: test for shape/type of data
  })
})

// Three main things for your test's. Describe, It and Expect
// Desribe: Test suite for a module
// It: Individual test's as part of the test suite
// Expect: Assertions which are granualar parts of an individual test