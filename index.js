// ATIVIDADE 1

let idade = 18
if (idade >= 18) {
  console.log('Você é maior de idade')

} else if (idade < 18) {
  console.log('Você é menor de idade')
}

// ATIVIDADE 2 

let dia = 11

switch (dia) {
  case dia = 1:
    console.log("Hoje é domingo")
    break;

  case dia = 2:
    console.log("Hoje é segunda")

    break; case dia = 3:
    console.log("Hoje é terça")

    break; case dia = 4:
    console.log("Hoje é quarta")

    break; case dia = 5:
    console.log("Hoje é quinta")

    break; case dia = 6:
    console.log("Hoje é sexta")

    break; case dia = 7:
    console.log("Hoje é sábado")

    break;
  default:
    console.log("Dia da semana inválido")
    break;
}


// ATIVIDADE 3

let n = 8

if (n % 2 == 0) {
  console.log('O Número é par')
} else {
  console.log('O número é impar')
}


//Questao 4
let pneu = 300
let comprados = 4
let total = pneu * comprados
const desconto = 10 / 100
let compracomdesconto = total * desconto
if (comprados >= 100) {
  console.log(total - compracomdesconto)

} else {
  console.log(total)
}

//Questao 5 

let num = -1


if (num >= 1) {
  console.log('Esse número é positivo')
} else if (num <= -1) {
  console.log('Esse número é negativo')
}
else {
  console.log('Esse número é zero')
}

