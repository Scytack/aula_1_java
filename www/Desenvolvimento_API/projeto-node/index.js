const ola = require("./saudacao_1"); 

ola();
// ------------------------

require("./mensagem")
// ------------------------

const ola2 = require("./saudacao_2");

ola2("João")
// ------------------------

const soma = require("./soma")

var resultado = soma(5, 4)
console.log("Resultado: " + resultado)
// ------------------------

const verificarIdades = require("./verificarIdades");

verificarIdades("18")
// ------------------------

const calc = require("./calculadora")
calc.somar(5, 4)
calc.subtrair(5, 4)
calc.multiplicar(5, 4)
calc.dividir(5, 4)
// ------------------------

const mostrarHora = require("./modulo/hora")
mostrarHora();