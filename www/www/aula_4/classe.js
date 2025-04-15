class carro {
    marca;
    modelo;
    ano;

    ligar() {
        console.log("O carro está ligado")
    }
}

var meucarro = new carro();
meucarro.marca = "Toyota" ;
meucarro.modelo = "Corolla";
meucarro.ano = "2000";

console.log(meucarro.ano)
console.log(meucarro.marca)
console.log(meucarro.modelo)
meucarro.ligar()














//
class Aluno {
    nome;
    idade;
    curso;
}

var alunos = new Aluno;
alunos.nome = "Arthur"
alunos.idade = "18"
alunos.curso = "Back-End"

var alunos2 = new Aluno;
alunos2.nome = "Miguel"
alunos2.idade = "18"
alunos2.curso = "Back-End"

console.log(alunos)
console.log(alunos2)












//
class livros {
    autor
    titulo

    exibirinfo(){
        console.log()
    }
};

var livro = new livros;
livro.titulo = "One piece";
livro.autor = "Eichiro Oda";

var livro2 = new livros;
livro2.titulo = "Harry Potter e o calice de fogo";
livro2.autor = "J. K. Rowling";

var livro3 = new livros;
livro3.titulo = "Pequeno Principe";
livro3.autor = "Antoine de Saint-Exupéry";

console.log(livro)
console.log(livro2)
console.log(livro3)











//
class produtos {
    nome;
    preco;
    quantidade;

    exibirdetalhes() {
        console.log("Esses são os detalhes")
    }
    calculartotal() {
        var total = this.preco * this.quantidade
        console.log("O total é: " + total)
    }
}

var produto1 = new produtos()
produto1.nome = "Biscoito"
produto1.preco = 3.99
produto1.quantidade = 60

var produto2 = new produtos()
produto2.nome = "Bolacha"
produto2.preco = 3.99
produto2.quantidade = 62

console.log(produto1)
console.log(produto2)
produto1.calculartotal()
produto2.calculartotal()





//
class filmes {
    genero
    titulo

};

var filme = new filmes;
filme.titulo = "Homem Aranha";
filme.genero = "Ação";

var filme2 = new filmes;
filme2.titulo = "Harry Potter e o calice de fogo";
filme2.genero = "Fantasia";

console.log(filme.genero)
console.log(filme2.genero)
