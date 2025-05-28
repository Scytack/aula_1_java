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

app.delete('/sessoes/:id', (req, res) => {
  const {id} = req.params;
  conexao.query('DELETE FROM sessoes WHERE id = ?', [id] , (err, results) => {

    if(err) {
      return res.status(500).send("Erro ao Deletar")
  }
  if (results.affectedRows === 0){
      return res.status(404).send("Aluno não encontrado")
  }
     res.status(200).send("Aluno deletado com sucesso")
})
})

app.put('/sessoes/:id', (req, res) =>{
  const {id} = req.params;
  const {aluno, personal, tipo_de_treino, data, horario, observacao} = req.body

  const query = 'UPDATE sessoes SET aluno = ?, personal = ?, tipo_de_treino = ?, data = ?, horario = ?, observacao = ? WHERE id = ?';
  conexao.query(query, [aluno, personal, tipo_de_treino, data, horario, observacao, id], (err, results) => {
      if(err) {
          return res.status(500).send("Erro ao atualizar");
      }
      if (results.affectedRows === 0){
          return res.status(404).send("Aluno não encontrado")
      }
      res.status(200).send("Aluno atualizado com sucesso")
  })
})

  app.get('/sessoes', (req, res) => {
    conexao.query('SELECT aluno, personal, tipo_de_treino, data, horario, observacao FROM sessoes', (err, results) =>{
        if(err) {
            return res.status(500).send('Erro ao buscar aluno');
        }
        res.status(200).send(results);
    })
  })

  const planos = []

  app.post('/planos', (req, res) => {
    const {nome, duracao_meses, preco, descricao} = req.body;

    if (!nome || typeof nome != 'string' || nome.trim() == ""){
        return res.status(400).send('Nome do plano é obrigatório e não pode ser uma string vazia.');
    }
    if (!duracao_meses || typeof duracao_meses != 'number' || duracao_meses <= 0){
        return res.status(400).send('A duração é obrigatória e não pode ser menor que 0.');
    }
    if (!preco || typeof preco != 'number' || preco <= 0){
        return res.status(400).send('O tipo de treino é obrigatório e tem que ser um numero.');
    }
  
  conexao.query(
    'INSERT INTO planos (nome, duracao_meses, preco, descricao) VALUES (?, ?, ?, ?)',
    [nome, duracao_meses, preco, descricao],
    () => {
        res.send("Plano cadastrado com sucesso!!");
    }
  );
})

app.delete('/planos/:id', (req, res) => {
  const {id} = req.params;
  conexao.query('DELETE FROM planos WHERE id = ?', [id] , (err, results) => {

    if(err) {
      return res.status(500).send("Erro ao Deletar")
  }
  if (results.affectedRows === 0){
      return res.status(404).send("Plano não encontrado")
  }
     res.status(200).send("Plano deletado com sucesso")
})
})

app.put('/planos/:id', (req, res) =>{
  const {id} = req.params;
  const {nome, duracao_meses, preco, descricao} = req.body

  const query = 'UPDATE planos SET nome = ?, duracao_meses = ?, preco = ?, descricao = ? WHERE id = ?';
  conexao.query(query, [nome, duracao_meses, preco, descricao, id], (err, results) => {
      if(err) {
          return res.status(500).send("Erro ao atualizar");
      }
      if (results.affectedRows === 0){
          return res.status(404).send("Plano não encontrado")
      }
      res.status(200).send("Plano atualizado com sucesso")
  })
})

  app.get('/planos', (req, res) => {
    conexao.query('SELECT nome, duracao_meses, preco, descricao FROM planos', (err, results) =>{
        if(err) {
            return res.status(500).send('Erro ao buscar plano');
        }
        res.status(200).send(results);
    })
  })


  app.listen(3000, () => {
    console.log("Servidor backend rodando em http://localhost:3000")
})