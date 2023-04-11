// src/app.js
const express = require('express');

const app = express();

app.get('/', (req, res) => res.status(200).json({ message: 'Olá Mundo!' }));

module.exports = app;

// De olho na dica 👀: associe os status a constantes nomeadas, desse modo você facilita a leitura! const OK = 200, const INTERNAL_SERVER_ERROR = 500 e const NOT_FOUND = 404 são ótimos começos!

// Observe que a função get recebe dois parâmetros:

// 1° parâmetro '/': Aqui é rota que tanto falamos. Podem ser /login, /produtos, /pessoas, ou qualquer outra coisa! Neste caso, colocamos apenas /.
// Chamamos a rota / de rota raiz;

// 2° parâmetro (req, res) => {}: Este espera uma função de callback. Esta função pode receber de 2 a 4 parâmetros, sendo eles:
// req: Essa é a Request (ou requisição), é por meio dela que recebemos os dados (envio por query, params e body);
// res: Essa é a Response (ou resposta), é por meio dela que respondemos o que nos é solicitado;
// next: Não vamos trabalhar com ele nesta aula;
// err: Não vamos trabalhar com ele nesta aula.