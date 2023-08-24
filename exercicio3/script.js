// EXERCÍCIO 3
// Parte 1

const op1 = (5 > 20) && (5 < 2)
console.log('EE:' , op1)

const op2 = (5 === 5) || (5 === "5")
console.log('OU:' , op2)

const op3 = (20 > 50)
console.log('NÃO:' , !op3)

const op4 = (20 > 50) || (50 > 60)
console.log('OU e NÃO:' , !op4)

//Parte 2

//Salário + Auxílio creche
const salarioFixo = 2000
const auxCreche = 45.50

const salarioParcial = (salarioFixo + auxCreche)
console.log('Salário fixo + auxílio creche (Salário parcial):' , salarioParcial)

//Comissões
//Jan
const vendasJan = 5784.50
let comissaoJan = (vendasJan * 0.1)
console.log('Comissão Jan:' , comissaoJan)

//Fev
const vendasFev = 3418.41
let comissaoFev = (vendasFev * 0.1)
console.log('Comissão Fev:' , comissaoFev)

//Mar
const vendasMar = 4124.10
let comissaoMar = (vendasMar * 0.1)
console.log('Comissão Mar:' , comissaoMar)

//Abr
const vendasAbr = 1874.00
let comissaoAbr = (vendasAbr * 0.1)
console.log('Comissão Abr:' , comissaoAbr)

//Mai
const vendasMai = 7000.00
let comissaoMai = (vendasMai * 0.1)
console.log('Comissão Mai:' , comissaoMai)

//Jun
const vendasJun = 9450.00
let comissaoJun = (vendasJun * 0.1)
console.log('Comissão Jun:' , comissaoJun)

//Salário bruto e Salário líquido
//Jan
let salarioBrutoJan = (salarioParcial + comissaoJan)
console.log('Salário Bruto Jan:' , salarioBrutoJan)
let inssJan = (salarioBrutoJan * 0.05)
let salarioLiquidoJan = (salarioBrutoJan - inssJan)
console.log('Salário Líquido Jan:' , salarioLiquidoJan)

//Fev
let salarioBrutoFev = (salarioParcial + comissaoFev)
console.log('Salário Bruto Fev:' , salarioBrutoFev)
let inssFev = (salarioBrutoFev * 0.05)
let salarioLiquidoFev = (salarioBrutoFev - inssFev)
console.log('Salário Líquido Fev:' , salarioLiquidoFev)

//Mar
let salarioBrutoMar = (salarioParcial + comissaoMar)
console.log('Salário Bruto Mar:' , salarioBrutoMar)
let inssMar = (salarioBrutoMar * 0.05)
let salarioLiquidoMar = (salarioBrutoMar - inssMar)
console.log('Salário Líquido Mar:' , salarioLiquidoMar)

//Abr
let salarioBrutoAbr = (salarioParcial + comissaoAbr)
console.log('Salário Bruto Abr:' , salarioBrutoAbr)
let inssAbr = (salarioBrutoAbr * 0.05)
let salarioLiquidoAbr = (salarioBrutoAbr - inssAbr)
console.log('Salário Líquido Abr:' , salarioLiquidoAbr)

//Mai
let salarioBrutoMai = (salarioParcial + comissaoMai)
console.log('Salário Bruto Mai:' , salarioBrutoMai)
let inssMai = (salarioBrutoMai * 0.05)
let salarioLiquidoMai = (salarioBrutoMai - inssMai)
console.log('Salário Líquido Mai:' , salarioLiquidoMai)

//Jun
let salarioBrutoJun = (salarioParcial + comissaoJun)
console.log('Salário Bruto Jun:' , salarioBrutoJun)
let inssJun = (salarioBrutoJun * 0.05)
let salarioLiquidoJun = (salarioBrutoJun - inssJun)
console.log('Salário Líquido Jun:' , salarioLiquidoJun)

//Média Salário Bruto
let mediaSalarioBruto = (salarioBrutoJan + salarioBrutoFev + salarioBrutoMar + salarioBrutoAbr + salarioBrutoMai + salarioBrutoJun) / 6
console.log('Média Salário Bruto:' , mediaSalarioBruto)

//Média Salário Líquido
let mediaSalarioLiquido = (salarioLiquidoJan + salarioLiquidoFev + salarioLiquidoMar + salarioLiquidoAbr + salarioLiquidoMai + salarioLiquidoJun) / 6
console.log('Média Salário Líquido:' , mediaSalarioLiquido)
