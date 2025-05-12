 const express = require('express')
 const app = express()

 app.use(express.json())

 app.get('/', (req, res) => {
    res.send("Bem vindo ao servidor express!!")
 })

 app.get('/sobre', (req, res) => {
    res.send("Este é um projeto de exemplo com rotas.")
 })

 app.get('/contato', (req, res) => {
    res.send("Entre em contato pelo e-mail:seuemail@email.com")
 })

app.listen(3000, () => {
    console.log("Seu servidor está funcionando em http://localhost:3000")
})