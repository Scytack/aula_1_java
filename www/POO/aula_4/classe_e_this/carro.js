class carro {
    marca;
    modelo;
    ano;

    ligar(marca, modelo, ano) {
        this.marca = marca
        this.modelo = modelo
        this.ano = ano

        console.log("A marca desse carro é " + this.marca + " seu modelo é " + this.modelo + " e foi lançado em " + this.ano)
    }
}

var meucarro = new carro();
meucarro.ligar("Toyota", "Corolla", "2000") 
