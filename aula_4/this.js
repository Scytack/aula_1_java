class Calculadora{

    valor1;
    valor2;
   

   somar(valor1, valor2) {
       this.valor1 = valor1
       this.valor2 = valor2
       var resultado = this.valor1 + this.valor2
       console.log("O resultado da soma é: " + resultado)

   }
}

var calc = new Calculadora()
calc.somar(10, 20)



















//
class Calculadora2{

    valor1;
    valor2;
   

   multiplicar(valor1, valor2) {
       this.valor1 = valor1
       this.valor2 = valor2
       var resultado = this.valor1 * this.valor2
       console.log("O resultado da multplicação é: " + resultado)

   }
}

var calc = new Calculadora2()
calc.multiplicar(10, 20)



















//
class Calculadora3{

    valor1;
    valor2;
   

   dividir(valor1, valor2) {
       this.valor1 = valor1
       this.valor2 = valor2
       var resultado = this.valor1 / this.valor2
       console.log("O resultado da divisão é: " + resultado)

   }
}

var calc = new Calculadora3()
calc.dividir(10, 20)

//

