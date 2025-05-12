const express = require('express')

const app = express()

app.use(express.json())

app.get('/', (req, res) => {
    res.send('Servidor express funcionando!');
})

app.get('/usuario', (req , res) => {
    res.send("Arthur")
})

app.get('/senai', (req , res) => {
    const curso = "Back-End"
    res.send(curso)
})

app.post('/usuario', (req , res) => {
    const nome = req.body.nome
    const cargo = req.body.cargo
    const idade = req.body.idade
    res.send("Usuario " + nome + " criado com sucesso, o seu cargo é " + cargo + " e sua idade é " + idade)
})

app.listen(3000, () => {
    console.log('Servidor rodando em http://localhost:3000')
})