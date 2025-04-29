class produtos {
    nome;
    marca;
    preco;

    adiconar(nome){
        this.nome = nome
        console.log("O produto " + nome + " foi adicionado ao estoque.\n")
    }

    detalhes(nome, marca, preco) {
    this.nome = nome
    this.marca = marca
    this.preco = preco
    console.log("O produto " + this.nome + " de marca " + this.marca + " tem o preço de " + this.preco + "\n")
    }
}

var produto1 = new produtos()
produto1.adiconar("Sabonete")

var produto2 = new produtos()
produto2.adiconar("Esfregão")

produto1.detalhes("Sabonete", "Multiuso", 10)
produto2.detalhes("Esfregão", "Mop", 50)