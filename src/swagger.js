const swaggerJSDoc = require("swagger-jsdoc");
const swaggerUI = require("swagger-ui-express");

const swaggerDefinition = {
  openapi: "3.0.0",
  info: {
    title: "Reto Técnico Indra - Alcalde",
    version: "1.0.0",
  },
};

const options = {
  swaggerDefinition,
  apis: ["src/peliculas/routes.js" , "src/personas/routes.js"],
};


const swaggerSpec = swaggerJSDoc(options);

const swaggerDocs = (app, port) => {
    app.use('/docs', swaggerUI.serve , swaggerUI.setup(swaggerSpec));
    app.get('/docs', (req, res) => {
        res.setHeader('Content-Type','application/json')
        res.send(swaggerSpec);
    });

    console.log('Swagger activo')
}

module.exports = {swaggerDocs};