import express from 'express';
import superHeroRoutes from './superHero.js';

const rootRouter = express.Router();

rootRouter.use('/superheroes', superHeroRoutes);

export default rootRouter;
