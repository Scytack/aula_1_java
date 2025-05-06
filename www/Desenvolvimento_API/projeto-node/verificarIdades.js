function verificarIdades(idade) {
    if (idade >= 18) {
        console.log("Maior de Idade");
    } else {
        console.log("Menor de Idade");
    }
}

module.exports = verificarIdades;