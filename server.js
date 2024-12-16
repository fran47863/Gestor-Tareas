const express = require('express');
const fs = require('fs');

const app = express()
const PORT = 3000;

app.use(express.json());

app.get('/', (req, res) => {
    res.send('El server funciona correctamente');
});

app.listen(PORT, () => {
    console.log('El servidor está corriendo en http://localhost:${PORT}');
});