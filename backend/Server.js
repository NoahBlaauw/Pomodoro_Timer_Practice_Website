const express = require('express');
const app = express();
const port = 8080;

const junk = ['Skunker', 'james', "Lunker"];

app.get('/junk', (req,res) => {
    res.json(junk);
});

app.get("/", (req, res) => {
    res.sendStatus(200);
    console.log("Home");
    res.send("Helloooooo");
})//Most basic route. Basically the home page


app.listen(port);