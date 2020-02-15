// library lists
const fs   = require('fs');
const yaml = require('js-yaml');
const express = require('express');
const app = express();
const swaggerUi = require('swagger-ui-express');

// document list
const documentAuthentication = yaml.safeLoad(fs.readFileSync('./swaggers/authentication.yaml', 'utf8'));

app.use('/', swaggerUi.serve, swaggerUi.setup(documentAuthentication));
app.use('/authentication', swaggerUi.serve, swaggerUi.setup(documentAuthentication));

app.listen(3200, () => console.log("Document server started on port 3200"));