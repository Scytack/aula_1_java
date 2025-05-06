function somar(a, b){
    var resultado = a + b;
    console.log("Resultado da soma: " + resultado)
}



function subtrair(a, b){
    var resultado = a - b;
    console.log("Resultado da subtração: " + resultado)
}



function multiplicar(a, b){
    var resultado = a * b;
    console.log("Resultado da multiplicação: " + resultado)
}



function dividir(a, b){
    var resultado = a / b;
    console.log("Resultado da divisão: " + resultado)
}

module.exports = { somar, subtrair, dividir, multiplicar}