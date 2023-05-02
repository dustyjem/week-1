// express web server 
const express = require('express');
const app = express();

const myControllers = require('./controllers/index.js');

app.get('/', myControllers.ekeneRoute)
app.get('/mariah', myControllers.mariahRoute)

app.listen(process.env.port || 3000);
console.log('Server running at port ' + (process.env.port || 3000));

