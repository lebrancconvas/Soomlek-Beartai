const express = require('express');
const app = express();
const port = 8000;

app.get('/', (req, res) => {
    res.send("This is a backend.");
})

app.listen(port, () => {
    console.log(`Port ${port} is opening.`);
})