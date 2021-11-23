const express = require('express');
const app = express();
const port = process.env.PORT || 8000;
const mathquestions = require('./data/mathquestions.json');

app.use(express.static('public'));

app.get('/api', (req, res, next) => {
    res.send(mathquestions);
})

app.listen(port, () => {
    console.log(`Port ${port} is opening.`);
})