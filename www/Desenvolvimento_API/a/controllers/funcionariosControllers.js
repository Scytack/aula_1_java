const conexao = require('../db/conexao')


exports.CriarFuncionarios = (req, res) => {
    const { nome, nascimento, salario, cpf, cargo} = req.body
    conexao.query(
        'INSERT INTO funcionarios (nome, nascimento, salario, cpf, cargo) VALUES (?,?,?,?,?)',
        [nome, nascimento, salario, cpf, cargo],
        (err) => {
            if (err) return res.status(500).send('Erro ao cadastrar funcionario');
            res.status(201).send('Funcionario cadastrada com sucesso!')
    })
};

exports.listarFuncionario = (req, res) => {
    conexao.query('SELECT * FROM  funcionarios', (err, results) => {
        if (err) {
            res.status(500).send('Erro ao buscar funcionario')
        }

        res.status(200).send(results)
    });
};

exports.atualizarFuncionarios = (req, res) => {
    const { id } = req.params;
    const { nome, nascimento, salario, cpf, cargo } = req.body;
    const query = 'UPDATE produtos SET nome = ?, nascimento = ?, salario = ?, cpf = ?, cargo = ? WHERE id = ?';
    conexao.query(query, [nome, nascimento, salario, cpf, cargo, id], (err, results) => {
      if (err) {
          return res.status(500).send('Erro ao atualizar');
      }
      if (results.affectedRows === 0) {
          return res.status(404).send('Funcionario não encontrado');
      }
      res.send('Funcionario atualizado com sucesso');
    });
  };


  exports.deletarFuncionarios = (req, res) => {
    const { id } = req.params;
    conexao.query('DELETE FROM funcionarios WHERE id = ?', [id], (err, results) => {
      if (err) {
          return res.status(500).send('Erro ao deletar');
      }
      if (results.affectedRows === 0) {
          return res.status(404).send('Funcionario não encontrado');
      }
      res.status(200).send('Funcionario deletado com sucesso');
    });
  };