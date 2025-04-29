
class Aluno {
    nome;
    idade;
    curso;
    exibirinfo(nome, idade, curso){
        this.nome = nome 
        this.idade = idade
        this.curso = curso
        console.log("Seu nome é " + this.nome )
        console.log("Sua idade é " + this.idade)
        console.log("Seu curso é  " + this.curso)
    }
}

var aluno1 = new Aluno()

aluno1.exibirinfo("Arthur", "18", "Back-end\n")

var aluno2 = new Aluno()

aluno2.exibirinfo("Miguel", "18", "Back-end\n")

