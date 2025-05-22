const express = require('express')
const mysql = require('mysql2')

const app = express()

app.use(express.json())

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'consultorio',
  });
  
  connection.connect();

const consultas = []

app.post('/consultas', (req, res) => {
    const {paciente, medico, especialidade, data, horario, observacoes} = req.body;

    if (!paciente || typeof paciente != 'string' || paciente.trim() == '') {
        return res.status(400).send('Nome do paciente é obrigatório e deve ser uma string não vazia.');
    }
    if (!medico || typeof medico != 'string' || medico.trim() == '') {
        return res.status(400).send('Nome do medico é obrigatório e deve ser uma string não vazia.');
    }
    if (!especialidade || typeof especialidade != 'string' || especialidade.trim() == '') {
        return res.status(400).send('A especialidade é obrigatória e deve ser uma string não vazia.');  
    }
    if (!data || typeof data != 'string' || data.trim() == '') {
        return res.status(400).send('A data é obrigatória e deve ser escrito com - entre os numeros.');
    }
    if (!horario || typeof horario != 'string' || horario.trim() == '') {
        return res.status(400).send('O horario é obrigatório e deve ser escrito com : entre os numeros.');
    }

    connection.query(
        'INSERT INTO consultas (paciente, medico, especialidade, data, horario, observacoes) VALUES (?, ?, ?, ?, ?, ?)',
        [paciente, medico, especialidade, data, horario, observacoes],
        () => {
          res.send('Paciente cadastrado com sucesso!');
        }
      );

})

app.get('/consultas', (req, res) => {
    connection.query('SELECT paciente, medico, especialidade, data, horario, observacoes FROM consultas', (err, results) =>{
        if(err) {
            return res.status(500).send('Erro ao buscar paciente');
        }
        res.status(200).send(results);
    })
})



app.listen(3000, () => {
    console.log("Servidor backend rodando em http://localhost:3000")
})