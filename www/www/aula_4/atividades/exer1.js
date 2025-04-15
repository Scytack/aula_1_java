function converterParaFahrenheit(cel) {
    var conversao = (cel * 1.8) + 32
    return conversao
}

var valor = converterParaFahrenheit(13);
console.log("O resultado em Fahrenheit é " + valor)