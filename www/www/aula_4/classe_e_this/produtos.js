class produtos {
    nome;
    preco;
    quantidade;

    exibirdetalhes(nome, preco, quantidade) {
        this.nome = nome
        this.preco = preco
        this.quantidade = quantidade
        console.log("Esses são os detalhes " + this.nome + " esse é o preço " + this.preco + " essa é a quantidade " + this.quantidade)
    }
        calculartotal(preco, quantidade) {
        this.preco = preco
        this.quantidade = quantidade
        var total = this.preco * this.quantidade
        console.log("O total é: " + total)
    }
}

var produto1 = new produtos()

produto1.exibirdetalhes("Biscoito", 2.99, 40)


var produto2 = new produtos()

produto2.exibirdetalhes ("Bolacha", 3.99 , 62)

produto1.calculartotal(45, 2)


