const express = require('express');
const { addSuperHero, getSuperHero } =  require('../controllers/superHero');

const superHeroRoutes = express.Router();

superHeroRoutes.post('/', addSuperHero);
superHeroRoutes.get('/', getSuperHero);

module.exports = superHeroRoutes;
