class livros {
    titulo;
    autor;

    exibirinfo(titulo, autor){
        this.titulo = titulo
        this.autor = autor
        console.log("O titulo é " + this.titulo )
        console.log("E foi escrito  pelo autor " + this.autor)
    }
};

var livro1 = new livros()

livro1.exibirinfo("harry potter", "jk rolling\n")

var livro2 = new livros()

livro2.exibirinfo("Pequeno Principe", "Antoine de Saint-Exupéry\n")

var livro3 = new livros()

livro3.exibirinfo("One Piece", "Eichiro Oda\n")