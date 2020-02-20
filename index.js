// library lists
const fs   = require('fs');
const yaml = require('js-yaml');
const express = require('express');
const app = express();
const swaggerUi = require('swagger-ui-express');

const options = {
    explorer: true,
    customCssUrl: '/css/global.css',
};

// document list
const documentAuthentication = yaml.safeLoad(fs.readFileSync('./swaggers/Authentication.yaml', 'utf8'));
const documentCompany = yaml.safeLoad(fs.readFileSync('./swaggers/Company.yaml', 'utf8'));
const documentCompanyService = yaml.safeLoad(fs.readFileSync('./swaggers/CompanyService.yaml', 'utf8'));
const documentStaff = yaml.safeLoad(fs.readFileSync('./swaggers/Staff.yaml', 'utf8'));
// const documentCMSCategoryNews = yaml.safeLoad(fs.readFileSync('./swaggers/CMSCategoryNews.yaml', 'utf8'));
// const documentCMSNews = yaml.safeLoad(fs.readFileSync('./swaggers/CMSCategoryNews.yaml', 'utf8'));
// const documentCMSContentType = yaml.safeLoad(fs.readFileSync('./swaggers/CMSContentType.yaml', 'utf8'));
// const documentConfigs = yaml.safeLoad(fs.readFileSync('./swaggers/Configs.yaml', 'utf8'));
const documentDepartment = yaml.safeLoad(fs.readFileSync('./swaggers/Department.yaml', 'utf8'));
// const documentDrive = yaml.safeLoad(fs.readFileSync('./swaggers/Drive.yaml', 'utf8'));
// const documentEmail = yaml.safeLoad(fs.readFileSync('./swaggers/Email.yaml', 'utf8'));
// const documentGroup = yaml.safeLoad(fs.readFileSync('./swaggers/Group.yaml', 'utf8'));
// const documentPolicy = yaml.safeLoad(fs.readFileSync('./swaggers/Policy.yaml', 'utf8'));
const documentPosition = yaml.safeLoad(fs.readFileSync('./swaggers/Position.yaml', 'utf8'));
// const documentReport = yaml.safeLoad(fs.readFileSync('./swaggers/Report.yaml', 'utf8'));
const documentRequestAttachment = yaml.safeLoad(fs.readFileSync('./swaggers/RequestAttachment.yaml', 'utf8'));
const documentRequestComment = yaml.safeLoad(fs.readFileSync('./swaggers/RequestComment.yaml', 'utf8'));
const documentRequestForward = yaml.safeLoad(fs.readFileSync('./swaggers/RequestForward.yaml', 'utf8'));
const documentRequestProcess = yaml.safeLoad(fs.readFileSync('./swaggers/RequestProcess.yaml', 'utf8'));
const documentService = yaml.safeLoad(fs.readFileSync('./swaggers/Service.yaml', 'utf8'));
// const documentTypeWord = yaml.safeLoad(fs.readFileSync('./swaggers/TypeWord.yaml', 'utf8'));
// const documentUserType = yaml.safeLoad(fs.readFileSync('./swaggers/UserType.yaml', 'utf8'));
// const documentWorkFlow = yaml.safeLoad(fs.readFileSync('./swaggers/WorkFlow.yaml', 'utf8'));


app.use(express.static('public'));

app.use('/authentication', swaggerUi.serve, (req, res) => res.send(swaggerUi.generateHTML(documentAuthentication, options)));
app.use('/company', swaggerUi.serve, (req, res) => res.send(swaggerUi.generateHTML(documentCompany, options)));
app.use('/companyservice', swaggerUi.serve, (req, res) => res.send(swaggerUi.generateHTML(documentCompanyService, options)));
app.use('/staff', swaggerUi.serve, (req, res) => res.send(swaggerUi.generateHTML(documentStaff, options)));
// app.use('/cmscategorynews', swaggerUi.serve, (req, res) => res.send(swaggerUi.generateHTML(documentCMSCategoryNews, options)));
// app.use('/cmsnews', swaggerUi.serve, (req, res) => res.send(swaggerUi.generateHTML(documentCMSNews, options)));
// app.use('/cmscontenttype', swaggerUi.serve, (req, res) => res.send(swaggerUi.generateHTML(documentCMSContentType, options)));
// app.use('/configs', swaggerUi.serve, (req, res) => res.send(swaggerUi.generateHTML(documentConfigs, options)));
app.use('/departments', swaggerUi.serve, (req, res) => res.send(swaggerUi.generateHTML(documentDepartment, options)));
// app.use('/drive', swaggerUi.serve, (req, res) => res.send(swaggerUi.generateHTML(documentDrive, options)));
// app.use('/sentemail', swaggerUi.serve, (req, res) => res.send(swaggerUi.generateHTML(documentEmail, options)));
// app.use('/group', swaggerUi.serve, (req, res) => res.send(swaggerUi.generateHTML(documentGroup, options)));
// app.use('/policy', swaggerUi.serve, (req, res) => res.send(swaggerUi.generateHTML(documentPolicy, options)));
app.use('/position', swaggerUi.serve, (req, res) => res.send(swaggerUi.generateHTML(documentPosition, options)));
// app.use('/', swaggerUi.serve, (req, res) => res.send(swaggerUi.generateHTML(documentReport, options)));
app.use('/requestattachment', swaggerUi.serve, (req, res) => res.send(swaggerUi.generateHTML(documentRequestAttachment, options)));
app.use('/requestcomment', swaggerUi.serve, (req, res) => res.send(swaggerUi.generateHTML(documentRequestComment, options)));
app.use('/requestforward', swaggerUi.serve, (req, res) => res.send(swaggerUi.generateHTML(documentRequestForward, options)));
app.use('/requestprocess', swaggerUi.serve, (req, res) => res.send(swaggerUi.generateHTML(documentRequestProcess, options)));
app.use('/service', swaggerUi.serve, (req, res) => res.send(swaggerUi.generateHTML(documentService, options)));
// app.use('/typewordflow', swaggerUi.serve, (req, res) => res.send(swaggerUi.generateHTML(documentTypeWord, options)));
// app.use('/wordflowconfigs', swaggerUi.serve, (req, res) => res.send(swaggerUi.generateHTML(documentTypeWord, options)));
// app.use('/usertypes', swaggerUi.serve, (req, res) => res.send(swaggerUi.generateHTML(documentUserType, options)));
// app.use('/workflow', swaggerUi.serve, (req, res) => res.send(swaggerUi.generateHTML(documentWorkFlow, options)));


app.listen(3200, () => console.log("Document server started on port 3200"));