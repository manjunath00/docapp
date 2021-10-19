'use strict';

const express = require('express');

// constants
const PORT = 8080

const app = express();

app.get('/', (req, res) => {
    res.send('<h1>Hello World</h1>')
})

app.listen(PORT)

console.log(`App is listening at http://localhost:${PORT}`);



