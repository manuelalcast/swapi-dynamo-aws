const express = require('express');
const PersonaController = require('./controller');
const PersonaRepository = require('../personas/repository');

const personaRoutes = () => {
    const router = express.Router();

    const repositoryPersona = new PersonaRepository();
    const personaController = PersonaController(repositoryPersona);

    
    /**
     * @swagger
     * /persona/swapi:
     *   get:
     *     summary: Retorna una lista de personajes del API SWAPI
     *     description: 
     *     responses:
    *       200:
    *         description: Lista de personajes.
    *         content:
    *           application/json:
    *             schema:
    *               type: object

    */
    router.route('/swapi/').get( personaController.getPersonaSwapi);

    
    /**
     * @swagger
     * /persona:
     *   get:
     *     summary: Retorna la lista de personas registradas en la base DynamoDB
     *     description: 
     *     responses:
    *       200:
    *         description: Lista de personas.
    *         content:
    *           application/json:
    *             schema:
    *               type: object

    */
    router.route('/').get(personaController.getPersonas);

    /**
     * @swagger
     * /persona:
     *   post:
     *     summary: Create persona in DynamoDB.
     *     requestBody:
     *       required: true
     *       content:
     *         application/json:
     *           schema:
     *             type: object
     *             properties:
     *               nombre:
     *                 type: string
     *                 description: Nombre de la persona.
     *                 example: Nombre
     *               apellido:
     *                 type: string
     *                 description: Apellido de la persona.
     *                 example: Apellido
     *               id:
     *                 type: string
     *                 description: Indentificador de la persona.
     *                 example: 6548651386746818
     *               edad:
     *                 type: int
     *                 description: Edad de la persona.
     *                 example: 25
     *               correo:
     *                 type: string
     *                 description: Correo de la persona.
     *                 example: correo@gmail.com
     *     responses:
    *       200:
    *         description: Lista de personas.
    *         content:
    *           application/json:
    *             schema:
    *               type: object
    */
    router.route('/').post(personaController.setPersona);

    //router.route('/:id').get(personaController.getPersonaById);

    return router;
}

module.exports = personaRoutes;