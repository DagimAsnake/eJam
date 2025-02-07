import express from 'express';
import {
  addSuperHero,
  getSuperHero,
} from '../controllers/superHero.js';

const superHeroRoutes = express.Router();

superHeroRoutes.post('/', addSuperHero);
superHeroRoutes.get('/', getSuperHero);

export default superHeroRoutes;
