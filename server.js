// express web server 
const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('Ekene Okeke');
})

app.get('/mariah', (req, res) => {
    res.send('Mariah Okeke');
})

app.listen(process.env.PORT || 3000);
console.log('Server running at port ' + (process.env.PORT || 3000));

