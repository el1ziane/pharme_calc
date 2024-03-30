const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const path = require('path');
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());

app.use(express.static(path.join(__dirname, 'pages')));

app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname, 'pages', 'index.html'));
});

app.get('/about', function (req, res) {
    res.sendFile(path.join(__dirname, 'pages', 'about.html'));
});

app.get('/calculo', function (req, res) {
    res.sendFile(path.join(__dirname, 'pages', 'calculo.html'));
});

app.get('/medicamento', function (req, res) {
    res.sendFile(path.join(__dirname, 'pages', 'medicamento.html'));
});


app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
});
