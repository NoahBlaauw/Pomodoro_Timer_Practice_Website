const http = require('http');
const express = require('express');
const app = express();

const host = 'localhost'; const port = 8080;

app.get("/api", (req, res) => {
    res.json({"users": ["userOne", "userTwo", "userThree"]})
})


app.listen(port, () => console.log(`Your website is being hosted at: http://${host}:${port}`));