class filmes {
    genero
    titulo

    generoDetalhes(titulo, genero){
        this.genero = genero
        this.titulo = titulo
        console.log("O genero do filme " + this.titulo + " é " + this.genero)
    }
};

var filme = new filmes;
filme.generoDetalhes("Homem Aranha", "Ação")

