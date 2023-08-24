// EXERCÍCIO 2

let numeroA = Number(prompt('Insira um número inteiro:'))
let numeroB = Number(prompt('Insira um segundo número inteiro:'))

let divisivelAB = numeroA % numeroB
let divisivelBA = numeroB % numeroA

console.log('O primeiro número é maior que o segundo?' , numeroA > numeroB)
console.log('O primeiro número é igual ao segundo?' , numeroA === numeroB)
console.log('O primeiro número é divisível pelo segundo?' , divisivelAB === 0)
console.log('O segundo número é divisível pelo primeiro?' , divisivelBA === 0)
