const express = require('express')

const app = express()

app.use(express.json())

app.get('/', (req, res) => {
    res.send("Servidor Express funcionando")
})

app.listen(3000, () => {
    console.log("Servidor Back-End rodando http://localhost:3000");
})

let produtos = []

app.post('/produtos', (req, res) => {
    const produto = {
        nome: req.body.nome,
        preco: req.body.preco,
        quantidade: req.body.quantidade
    }
    
    produtos.push(produto)
    res.send("Produto cadastrado com sucesso!")
})



app.get('/produtos', (req, res) => {
    res.send(produtos)
})

app.get('/produtos/', (req, res) => {
    res.send(produtos)
})