const express = require('express')
const mysql = require('mysql2')

const app = express()

app.use(express.json())

const conexao = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'centro_treinamento',
  });

  conexao.connect();

  const sessoes = []

  app.post('/sessoes', (req, res) => {
    const {aluno, personal, tipo_de_treino, data, horario, observacao} = req.body;

    if (!aluno || typeof aluno != 'string' || aluno.trim() == ""){
        return res.status(400).send('Nome do aluno é obrigatório e não pode ser uma string vazia.');
    }
    if (!personal || typeof personal != 'string' || personal.trim() == ""){
        return res.status(400).send('Nome do personal é obrigatório e não pode ser uma string vazia.');
    }
    if (!tipo_de_treino || typeof tipo_de_treino != 'string' || tipo_de_treino.trim() == ""){
        return res.status(400).send('O tipo de treino é obrigatório e não pode ser uma string vazia.');
    }
    if (!data || typeof data != 'string' || data.trim() == ""){
        return res.status(400).send('A data é obrigatória e deve ser escrito com - entre os numeros.');
    }
    if (!horario || typeof horario != 'string' || horario.trim() == ""){
        return res.status(400).send('O horario é obrigatório e deve ser escrito com : entre os numeros.');
    }
  
  conexao.query(
    'INSERT INTO sessoes (aluno, personal, tipo_de_treino, data, horario, observacao) VALUES (?, ?, ?, ?, ?, ?)',
    [aluno, personal, tipo_de_treino, data, horario, observacao],
    () => {
        res.send("Sessão cadastrada com sucesso!!");
    }
  );
})

  app.get('/sessoes', (req, res) => {
    conexao.query('SELECT aluno, personal, tipo_de_treino, data, horario, observacao FROM sessoes', (err, results) =>{
        if(err) {
            return res.status(500).send('Erro ao buscar aluno');
        }
        res.status(200).send(results);
    })
  })

  app.listen(3000, () => {
    console.log("Servidor backend rodando em http://localhost:3000")
})