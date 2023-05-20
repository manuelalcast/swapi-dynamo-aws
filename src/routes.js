const express = require('express');
const peliculaRoute = require('./peliculas/routes');
const personaRoute = require('./personas/routes');

const Routes = (dependencies) => {
    const router = express.Router();

    router.use('/pelicula',peliculaRoute(dependencies));
    router.use('/persona',personaRoute(dependencies));

    return router;
}

module.exports = Routes;