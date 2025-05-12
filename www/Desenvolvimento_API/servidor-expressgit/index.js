const express = require('express')

const app = express()

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

app.listen(3000, () => {
    console.log('Servidor rodando em http://localhost:3000')
})