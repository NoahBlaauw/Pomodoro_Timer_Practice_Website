const express = require('express');
const app = express();
const port = 8080;

const junk = ['Skunker', 'james', "Lunker"];

app.get('/junk', (req,res) => {
    res.json(junk);
});

app.listen(port);