const express = require('express');
const path = require('path');
const cors = require('cors');
const moment = require('moment');
const mysql = require('mysql2/promise');
const app = express();

require('dotenv').config(); 

app.use(express.json());
app.use(cors());

app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE");
    res.header("Access-Control-Allow-Headers", "Content-Type");
    next();
});

app.use(express.static(path.join(__dirname, "public")));

const connection = mysql.createPool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_BASE,
    dialect: process.env.DB_DIALECT 
});
module.exports = connection;

app.post('/pets_adicionar', async (req, res) => {
    const newData = req.body;
    try {
        const now = moment().format('YYYY-MM-DD HH:mm:ss');
        newData.createdAt = now;
        newData.updatedAt = now;
        
        await connection.query('INSERT INTO pets SET ?', newData);
        
        res.status(200).send('Pet adicionado com sucesso');
    } catch (error) {
        console.error('Erro ao adicionar o pet:', error);
        res.status(500).send('Erro ao adicionar o Pet');
    }
});

app.post('/produtos_adicionar', async (req, res) => {
    const newData = req.body;
    try {
        const now = moment().format('YYYY-MM-DD HH:mm:ss');
        newData.createdAt = now;
        newData.updatedAt = now;
        
        await connection.query('INSERT INTO produtos SET ?', newData);
        
        res.status(200).send('Produto adicionado com sucesso');
    } catch (error) {
        console.error('Erro ao adicionar o Produto:', error);
        res.status(500).send('Erro ao adicionar o Produto');
    }
});

app.post('/servicos_adicionar', async (req, res) => {
    const newData = req.body;
    try {
        const now = moment().format('YYYY-MM-DD HH:mm:ss');
        newData.createdAt = now;
        newData.updatedAt = now;
        
        await connection.query('INSERT INTO servicos SET ?', newData);
        
        res.status(200).send('Serviço adicionado com sucesso');
    } catch (error) {
        console.error('Erro ao adicionar o Serviço:', error);
        res.status(500).send('Erro ao adicionar o Serviço');
    }
});

app.post('/clientes_adicionar', async (req, res) => {
    const newData = req.body;
    try {
        const now = moment().format('YYYY-MM-DD HH:mm:ss');
        newData.createdAt = now;
        newData.updatedAt = now;
        
        await connection.query('INSERT INTO clientes SET ?', newData);
        
        res.status(200).send('Serviço adicionado com sucesso');
    } catch (error) {
        console.error('Erro ao adicionar o Serviço:', error);
        res.status(500).send('Erro ao adicionar o Serviço');
    }
});


app.listen(8080, () => {
    console.log("Servidor iniciado na porta 8080: http://localhost:8080");
});