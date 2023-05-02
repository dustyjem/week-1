// express web server 
const express = require('express');
const app = express();


const port = 3000

app.use('/', require('./routes/index.js'));

app.listen(process.env.port || 3000);
console.log('Server running at port ' + (process.env.port || 3000));

