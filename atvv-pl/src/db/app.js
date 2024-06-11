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

app.post('/comprar', async (req, res) => {
    const newData = req.body;
    try {
        const now = moment().format('YYYY-MM-DD HH:mm:ss');
        newData.createdAt = now;
        newData.updatedAt = now;
        
        await connection.query('INSERT INTO vendas SET ?', newData);
        
        res.status(200).send('Compra realizada com sucesso!');
    } catch (error) {
        console.error('Erro ao adicionar o Serviço:', error);
        res.status(500).send('Erro ao adicionar o Serviço');
    }
});

app.get('/clientes', async (req, res) => {
    try {

        const [rows, fields] = await connection.query('SELECT * from clientes');
        res.json(rows);

    } catch (error) {
        console.error('Erro ao buscar produtos:', error);
        res.status(500).send('Erro ao buscar produtos');
    }
});

app.delete('/clientes/:id', async (req, res) => {
    const id = req.params.id;
    try {
      
      await connection.query('DELETE FROM clientes WHERE id = ?', [id]);
      res.status(200).send('Cliente deletado com sucesso');

    } catch (error) {
      console.error('Erro ao apagar Cliente:', error);
      res.status(500).send('Erro ao apagar Cliente');
    }
});

app.get('/servicos', async (req, res) => {
    try {

        const [rows, fields] = await connection.query('SELECT id, nome, valor from servicos');
        res.json(rows);

    } catch (error) {
        console.error('Erro ao buscar servicos:', error);
        res.status(500).send('Erro ao buscar servicos');
    }
});

app.delete('/servicos/:id', async (req, res) => {
    const id = req.params.id;
    try {
      
      await connection.query('DELETE FROM servicos WHERE id = ?', [id]);
      res.status(200).send('Servicos deletado com sucesso');

    } catch (error) {
      console.error('Erro ao apagar servicos:', error);
      res.status(500).send('Erro ao apagar servicos');
    }
});

app.put('/servicos_editar', async (req, res) => {
    const data = req.body; // Os dados atualizados são enviados no corpo da requisição

    try {
 
        await connection.query('UPDATE servicos SET nome = ?, valor = ? WHERE id = ?', [data.nome, data.valor, data.id]);
  
      res.status(200).send('Dados atualizados com sucesso');
    }
    
    catch (error) {

      console.error('Erro ao atualizar os dados:', error);
      res.status(500).send('Erro ao atualizar os dados');
    }
});

app.get('/produtos', async (req, res) => {
    try {

        const [rows, fields] = await connection.query('SELECT id, nome, valor from produtos');
        res.json(rows);

    } catch (error) {
        console.error('Erro ao buscar produtos:', error);
        res.status(500).send('Erro ao buscar produtos');
    }
});

app.delete('/produtos/:id', async (req, res) => {
    const id = req.params.id;
    try {
      
      await connection.query('DELETE FROM produtos WHERE id = ?', [id]);
      res.status(200).send('Produtos deletado com sucesso');

    } catch (error) {
      console.error('Erro ao apagar produtos:', error);
      res.status(500).send('Erro ao apagar produtos');
    }
});

app.put('/produtos_editar', async (req, res) => {
    const data = req.body; 
    try {
        await connection.query('UPDATE produtos SET nome = ?, valor = ? WHERE id = ?', [data.nome, data.valor, data.id]);
        res.status(200).send('Dados atualizados com sucesso');
    }
    catch (error) {
      console.error('Erro ao atualizar os dados:', error);
      res.status(500).send('Erro ao atualizar os dados');
    }
});

app.get('/pets', async (req, res) => {
    try {

        const [rows, fields] = await connection.query('SELECT id, nome, tipo, raca, genero, nomeDono, cpfDono from pets');
        res.json(rows);

    } catch (error) {
        console.error('Erro ao buscar servicos:', error);
        res.status(500).send('Erro ao buscar servicos');
    }
});

app.delete('/pets/:id', async (req, res) => {
    const id = req.params.id;
    try {
      
      await connection.query('DELETE FROM pets WHERE id = ?', [id]);
      res.status(200).send('Produtos deletado com sucesso');

    } catch (error) {
      console.error('Erro ao apagar produtos:', error);
      res.status(500).send('Erro ao apagar produtos');
    }
});

app.put('/pets_editar', async (req, res) => {
    const data = req.body; 
    try {
        await connection.query('UPDATE pets SET nome = ?, tipo = ?, raca = ?, genero = ?, nomeDono = ?, cpfDono = ? WHERE id = ?', [data.nome, data.tipo, data.raca, data.genero, data.nomeDono,data.cpfDono, data.id]);
        res.status(200).send('Dados atualizados com sucesso');
    }
    catch (error) {
      console.error('Erro ao atualizar os dados:', error);
      res.status(500).send('Erro ao atualizar os dados');
    }
});

app.listen(8080, () => {
    console.log("Servidor iniciado na porta 8080: http://localhost:8080");
});












app.post('/telefone_adicionar', async (req, res) => {
    const newDataTelefone = req.body;
    try {
        const now = moment().format('YYYY-MM-DD');
        newDataTelefone.createdAt = now;
        newDataTelefone.updatedAt = now;
        
        await connection.query('INSERT INTO telefones SET ?', newDataTelefone);
        
        res.status(200).send('Telefones cadastrado');
    } catch (error) {
        console.error('Erro ao adicionar o Telefones:', error);
        res.status(500).send('Erro ao cadastrar Telefones');
    }
});

app.get('/telefones', async (req, res) => {
    try {
        const [rows, fields] = await connection.query('SELECT id, idCliente, telefone from telefones');
        res.json(rows);
    } catch (error) {
        console.error('Erro ao buscar telefone:', error);
        res.status(500).send('Erro ao buscar telefones');
    }
});
app.post('/rg_adicionar', async (req, res) => {
    const newDataRg = req.body;
    try {
        const now = moment().format('YYYY-MM-DD');
        newDataRg.createdAt = now;
        newDataRg.updatedAt = now;
        
        await connection.query('INSERT INTO rg SET ?', newDataRg);
        
        res.status(200).send('Rgs cadastrados');
    } catch (error) {
        console.error('Erro ao adicionar o Rgs:', error);
        res.status(500).send('Erro ao cadastrar Rgs');
    }
});

app.get('/rgs', async (req, res) => {
    try {
        const [rows, fields] = await connection.query('SELECT * from rg');
        res.json(rows);
    } catch (error) {
        console.error('Erro ao buscar telefone:', error);
        res.status(500).send('Erro ao buscar telefones');
    }
});

app.put('/rg_editar', async (req, res) => {
    const data = req.body; 
    try {
        await connection.query('UPDATE rg SET rgCliente = ?, ufRgCliente = ?, dataEmissaoRgCliente = ? WHERE id = ?', [data.rgCliente, data.ufRgCliente, data.dataEmissaoRgCliente, data.id]);
        res.status(200).send('Dados atualizados com sucesso');
    }
    catch (error) {
      console.error('Erro ao atualizar os dados:', error);
      res.status(500).send('Erro ao atualizar os dados');
    }
});
app.put('/rg_editar', async (req, res) => {
    const data = req.body; 
    try {
        await connection.query('UPDATE telefones SET telefone = ? WHERE id = ?', [data.telefone, data.id]);
        res.status(200).send('Dados atualizados com sucesso');
    }
    catch (error) {
      console.error('Erro ao atualizar os dados:', error);
      res.status(500).send('Erro ao atualizar os dados');
    }
});
app.put('/cliente_editar', async (req, res) => {
    const data = req.body; 
    try {
        await connection.query('UPDATE clientes SET nome = ?, email = ?, cpf = ?, dataEmissaoCpf = ?, estado = ?, cidade = ?, bairro = ?, rua = ?, numero = ?, cep = ?, complemento = ? WHERE id = ?', 
                            [data.nome,data.email,data.cpf,data.dataEmissaoCpf,data.estado,data.cidade,data.bairro,data.rua,data.numero,data.cep,data.complemento,data.id]);
        res.status(200).send('Dados atualizados com sucesso');
    }
    catch (error) {
      console.error('Erro ao atualizar os dados:', error);
      res.status(500).send('Erro ao atualizar os dados');
    }
});
