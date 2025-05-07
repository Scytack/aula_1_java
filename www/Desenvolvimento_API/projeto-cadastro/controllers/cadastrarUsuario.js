function cadastrar(nome, idade){
    if (nome != "" && idade != ""){
        console.log("O Usuário foi cadastrado com sucesso!!")
        console.log("Nome: " + nome)
        console.log("Idade: " + idade)
     }else{
        console.log("Erro: Nome e idade são obrigatórios para o cadastro!")
     }

} 

module.exports = cadastrar
