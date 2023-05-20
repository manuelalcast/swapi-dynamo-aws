const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const { config } = require('./config/index');
const Routes = require('./src/routes');
const { swaggerDocs } = require('./src/swagger');
const apiErrorHandler = require('./error/api-error-handler');

app.use(cors());

app.use(bodyParser.json({limit: '50mb'}));
app.use(bodyParser.urlencoded({limit: '50mb', extended: true}));
app.use(apiErrorHandler);

app.get('/', (req, res) => {
    res.send("RETO TÉCNICO BACKEND NODEJS - ALCALDE");
});

app.use('/', Routes());

module.exports = app;
/*app.listen(config.PORT, ()=> {
    console.log(''+config.PORT);
    swaggerDocs(app);
});*/