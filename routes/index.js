const routes = require('express').Router();
const myControllers = require('../controllers/index.js');



routes.get('/', myControllers.ekeneRoute)
routes.get('/mariah', myControllers.mariahRoute)

module.exports = routes;