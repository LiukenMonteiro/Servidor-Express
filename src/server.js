// src/server.js
// const app = require('./app');

// app.listen(3001, () => console.log('Servidor online na porta 3001'));

const express = require('express');

const app = express();
const port = 3000;

app.use(express.json());
// Ler corpo da requisição em formato de texto (text ou json)

// Query string
app.get('/search', (req, res) => {
    console.log(req.query.name);
    console.log(req.query.age);

    res.status(200).send('Search done!');
});

// Parâmetros de rota
app.post('/people/:id/:name', (req, res) => {
    console.log(req.params.id);
    console.log(req.params.name);
    res.status(200).send('People ok!!');
});

// Corpo da requisição
app.post('/tasks', (req, res) => {
    console.log('Got body:', req.body);
    console.log(req.body.name);
    console.log(req.body.age);
    res.status(200).send('Task ok!!');
});

app.listen(port, () => {
    console.log(`Aplicação em execução na porta ${port}`);
});