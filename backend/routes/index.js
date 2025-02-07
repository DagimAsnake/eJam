const express = require('express');
const superHeroRoutes = require('./superHero');

const rootRouter = express.Router();

rootRouter.use('/superheroes', superHeroRoutes);

module.exports = rootRouter;
