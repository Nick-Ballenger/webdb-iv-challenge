const express = require('express');
const helmet = require('helmet');

const dishRouter = require('../routers/dishroute');
const recipeRouter = require('../routers/reciperoute')

const server = express();

server.use(helmet());
server.use(express.json());

server.use('/api/dish', dishRouter);
server.use('/api/recipe', recipeRouter);

// sanity check route
server.get('/', (req, res) => {
  res.status(200).json({ hello: 'World!' });
});

module.exports = server;
