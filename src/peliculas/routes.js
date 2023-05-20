const express = require("express");
const PeliculaController = require("./controller");
const peliculaRoutes = () => {
  const router = express.Router();

  const peliculaController = PeliculaController();

  /**
     * @swagger
     * /pelicula:
     *   get:
     *     summary: Retorna una lista de pelicula del API SWAPI
     *     description: 
     *     responses:
    *       200:
    *         description: Lista de películas.
    *         content:
    *           application/json:
    *             schema:
    *               type: object

    */
  router.route("/").get(peliculaController.getPelicula);

  return router;
};

module.exports = peliculaRoutes;
