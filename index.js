// library lists
const fs   = require('fs');
const yaml = require('js-yaml');
const express = require('express');
const app = express();
const swaggerUi = require('swagger-ui-express');

// document list
const documentAuthentication = yaml.safeLoad(fs.readFileSync('./swaggers/Authentication.yaml', 'utf8'));
const documentStaff = yaml.safeLoad(fs.readFileSync('./swaggers/Staff.yaml', 'utf8'));
const documentCompany = yaml.safeLoad(fs.readFileSync('./swaggers/Company.yaml', 'utf8'));

app.use('/authentication', swaggerUi.serve, (req, res) => res.send(swaggerUi.generateHTML(documentAuthentication)));
app.use('/staff', swaggerUi.serve, (req, res) => res.send(swaggerUi.generateHTML(documentStaff)));
app.use('/company', swaggerUi.serve, (req, res) => res.send(swaggerUi.generateHTML(documentCompany)));

app.listen(3200, () => console.log("Document server started on port 3200"));