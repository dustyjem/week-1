// express web server 
const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('Ekene Okeke');
})

app.listen(process.env.PORT || 3000);
console.log('Server running at port ' + (process.env.PORT || 3000));

