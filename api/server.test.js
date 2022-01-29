// Write your tests here
const db = require('../data/dbConfig')
const request = require('supertest')
const server = require('./server')

beforeAll(async () => {
  await db.migrate.rollback()
  await db.migrate.latest()
})

test('sanity', () => {
  expect(true).not.toBe(false)
})

// I really struggled with testing this unit, I don't have time left to finish up all of my testing. :(

// Jokes Endpoint Tests


test('get /jokes', async () => {
  const res = await request(server).get('/api/jokes')
  expect(res.status).toBe(401)

})
test('get /jokes', async () => {
  const res = await request(server).get('/api/jokes')
  expect(res.body.message).toBe('token required')

})

// Register Endpoint Tests

test('post /register with bad request', async () => {
  const res = await request(server).post('/api/auth/register')
  .send({ username: 'Frank'})
  expect(res.status).toBe(400)
  expect(res.body.message).toBe('username and password required')
})
test('post /register with good request', async () => {
  const res = await request(server).post('/api/auth/register')
  .send({ username: 'Frank', password: "1234" })
  expect(res.status).toBe(201)
})

// Login Endpoint Tests

test("/login with invalid info", async () => {
	const res = await request(server)
		.post('/api/auth/login')
    .send({ username: 'bret', password: "1234" })
    expect(res.body.message).toBe('invalid credentials')
		
})


