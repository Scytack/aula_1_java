class livros {
    autor
    titulo

    exibirinfo(titulo, autor){
        this.titulo = titulo
        this.autor = autor
        console.log("O titulo do livro é " + this.titulo + " e seu autor é " + this.autor)
    }
};

var livro = new livros;
livro.exibirinfo("One piece", "Eichiro Oda")

