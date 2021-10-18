'use strict';

const app = require('../app.js');
const supertest = require('supertest')

const request = supertest(app);

const { it, expect } = require("@jest/globals");
const { describe } = require("yargs");

describe('Testing my express server', async () => {
  it('should respond with a string on POST /talk', () => {
    let response = await request.post('/talk');

    expect(response.status).toBe(200)
  })
})