const request = require('supertest');
const express = require('express');
const { addSuperHero, getSuperHero } =  require('../controllers/superHero');

const app = express();
app.use(express.json());

// Mock routes
app.post('/superheroes', addSuperHero);
app.get('/superheroes', getSuperHero);

describe('Superhero API', () => {
  test('POST /superheroes - should add a new superhero', async () => {
    const response = await request(app)
      .post('/superheroes')
      .send({
        name: 'Spider-Man',
        super_power: 'Web-slinging',
        humility_score: 8,
      });

    expect(response.status).toBe(201);
    expect(response.body.message).toBe('Superhero added successfully');
    expect(response.body.superheroes.length).toBe(1);
    expect(response.body.superheroes[0].name).toBe('Spider-Man');
  });

  test('POST /superheroes - should fail when required fields are missing', async () => {
    const response = await request(app)
      .post('/superheroes')
      .send({ name: 'Iron Man' }); // Missing fields

    expect(response.status).toBe(400);
    expect(response.body.message).toBe(
      'Name, super power, and humility score are required.'
    );
  });

  test('GET /superheroes - should return superheroes sorted by humility score', async () => {
    await request(app)
      .post('/superheroes')
      .send({
        name: 'Batman',
        super_power: 'Detective skills',
        humility_score: 9,
      });

    const response = await request(app).get('/superheroes');

    expect(response.status).toBe(200);
    expect(response.body.message).toBe('Superheroes fetched successfully');
    expect(response.body.superheroes[0].name).toBe('Batman'); // Highest humility score
  });
});
