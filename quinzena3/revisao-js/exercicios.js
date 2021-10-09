// EXERCÍCIO 01
function inverteArray(array) {

  const arryInvertido = [];
  for (let i = array.length - 1; i >= 0; i--) {
    arryInvertido.push(array[i])
  }
  return arryInvertido

}
console.log(arryInvertido)

// EXERCÍCIO 02
function retornaNumerosParesElevadosADois(array) {
  const numeroPar = array.filter(valor => {
    return valor % 2 === 0
  })
  const elevado = numeroPar.map(valor => {
    if (valor % 2 === 0) {
      return valor * valor
    }
  })

  return elevado
}
// EXERCÍCIO 03
function retornaNumerosPares(array) {


  let arryDePares = []
  for (let i = 0; i < array.length; i++) {
    if (array[i] % 2 === 0) {
      arryDePares.push(array[i])
    }
  }
  return arryDePares

}
// EXERCÍCIO 04
function retornaMaiorNumero(array) {

  let oNumeroMaior = -1

  for (let i = 0; i < array.length; i++) {
    if (array[i] > oNumeroMaior) {
      oNumeroMaior = array[i]
    }
  }
  return oNumeroMaior
}

// EXERCÍCIO 05
function retornaQuantidadeElementos(array) {
  return array.length
}

// EXERCÍCIO 06
function retornaExpressoesBooleanas() {

  const booleano1 = true
  const booleano2 = false
  const booleano3 = !booleano2
  const booleano4 = !booleano3

  const resultadoComE = booleano1 && booleano2 && !booleano4
  const resultadoComEeOU = (booleano1 && booleano2) || !booleano3
  const resultadoComOuEOu = (booleano2 || booleano3) && (booleano4 || booleano1)
  const resultadoNegando = !(booleano2 && booleano3) || !(booleano1 && booleano3)
  const resultadoNegandoEouEE = !(booleano1) && !(booleano3) || (!booleano4 && booleano3 && booleano3)

  const respostas = [resultadoComE, resultadoComEeOU, resultadoComOuEOu, resultadoNegando, resultadoNegandoEouEE]
  return respostas
}

// EXERCÍCIO 07
function retornaNNumerosPares(n) {
  const guardaNumeroPar = []
  let par = 0
  for (let i = 0; i < n; i++) {

    guardaNumeroPar.push(par)
    par += 2

  }
  return guardaNumeroPar
}

// EXERCÍCIO 08
function checaTriangulo(a, b, c) {
  if (a !== b && a !== c && b !== c) {
    return 'Escaleno'
  } else if (a === b && a === c && b === c) {
    return 'Equilátero'
  } else if (a === b && b !== c && c !== a) {
    return 'Isósceles'
  }
}

// EXERCÍCIO 09
function comparaDoisNumeros(num1, num2) {
  // Formato do objeto a ser retornado:
  let NumeroMaior = 0
  let NumeroMenor = 0

  if (num1 > num2) {
    NumeroMaior = num1
    NumeroMenor = num2

  } else {
    NumeroMaior = num2
    NumeroMenor = num1
  }

  const divisaoDoMaior = NumeroMaior % NumeroMenor === 0
  const diferencaNNumeros = NumeroMaior - NumeroMenor

  return {
    maiorNumero: NumeroMaior,
    maiorDivisivelPorMenor: divisaoDoMaior,
    diferenca: diferencaNNumeros
  }
}

// EXERCÍCIO 10
function segundoMaiorEMenor(array) {
  let verificaArray = array.length
  for (let i = 0; i < verificaArray; i++) {
    for (let x = 0; x < verificaArray; x++) {
      if (array[x] > array[x + 1]) {
        let reserva = array[x]
        array[x] = array[x + 1]
        array[x + 1] = reserva
      }
    }
  }
  return [array[array.length - 2], array[1]]
}


// EXERCÍCIO 11
function ordenaArray(array) {
  // implemente sua lógica aqui
  let verificaArray = array.length
  for (let i = 0; i < verificaArray; i++) {
    for (let x = 0; x < verificaArray; x++) {
      if (array[x] > array[x + 1]) {
        let reserva = array[x]
        array[x] = array[x + 1]
        array[x + 1] = reserva
      }
    }
  }
  return array

}

// EXERCÍCIO 12
function filmeFavorito() {
  const filme = {
    nome: "O Diabo Veste Prada",
    ano: 2006,
    diretor: "David Frankel",
    atores: ["Meryl Streep", "Anne Hathaway", "Emily Blunt", "Stanley Tucci"]
  }

  return filme

}

// EXERCÍCIO 13
function imprimeChamada() {
  const filme = {
    nome: "O Diabo Veste Prada",
    ano: 2006,
    diretor: "David Frankel",
    atores: ["Meryl Streep", "Anne Hathaway", "Emily Blunt", "Stanley Tucci"]
  }


  return `Venha assistir ao filme ${filme.nome}, de ${filme.ano}, dirigido por ${filme.diretor} e estrelado por ${filme.atores[0]}, ${filme.atores[1]}, ${filme.atores[2]}, ${filme.atores[3]}.`

}

// EXERCÍCIO 14
function criaRetangulo(lado1, lado2) {

  const retangulo = {
    largura: lado1,
    altura: lado2,
    perimetro: 2 * (lado1 + lado2),
    area: lado1 * lado2
  }
  return retangulo
}

// EXERCÍCIO 15
function anonimizaPessoa(pessoa) {

  return {
    ...pessoa,
    nome: "ANÔNIMO"
  }

}

// EXERCÍCIO 16A
function maioresDe18(arrayDePessoas) {

const soMaioresDe18 = (array)=>{
  return array.idade >=18
}
let somenteMaioresDeIdade = arrayDePessoas.filter(soMaioresDe18)
return somenteMaioresDeIdade
}



// EXERCÍCIO 16B
function menoresDe18(arrayDePessoas) {

  const soMenoresDe18 = (array)=>{
    return array.idade < 18
  }
  let somenteMenoresDeIdade = arrayDePessoas.filter(soMenoresDe18)
  return somenteMenoresDeIdade
  }




// EXERCÍCIO 17A
function multiplicaArrayPor2(array) {

  const multipicacaoX2 = (array) => {
    return array * 2
  }
  let resultadoMultix2 = array.map(multipicacaoX2)
  return resultadoMultix2
}

// EXERCÍCIO 17B
function multiplicaArrayPor2S(array) {
  const multipicacaoX2 = (array) => {
    return array * 2
  }
  let resultadoMultix2 = array.map(multipicacaoX2)

  return resultadoMultix2.map(String)
}

// EXERCÍCIO 17C
function verificaParidade(array) {
  // const multipicacaoX2 =(array)=>{

  let arrayNovo = []
  for (let i = 0; i < array.length; i++)
    if (array[i] % 2 === 0) {
      arrayNovo.push(`${array[i]} é par`)
    } else {
      arrayNovo.push(`${array[i]} é ímpar`)
    }

  return arrayNovo.map(String)




}

// EXERCÍCIO 18A
function retornaPessoasAutorizadas(pessoas) {
  
  
  const verificacaoIdadeEaAltura = (array)=>{
    return array.idade > 14 && array.altura > 1.5 && array.idade < 60
  }
  let pessorasPermitidas = pessoas.filter(verificacaoIdadeEaAltura)
  return pessorasPermitidas



}

// EXERCÍCIO 18B
function retornaPessoasNaoAutorizadas(pessoas) {
  const verificacaoIdadeEaAltura = (array)=>{
    return array.idade <= 14 || array.altura < 1.5 || array.idade > 60
  }
  let pessorasPermitidas = pessoas.filter(verificacaoIdadeEaAltura)
  return pessorasPermitidas
}

// EXERCÍCIO 19A
function ordenaPorNome(consultasNome) {

}

// EXERCÍCIO 19B
function ordenaPorData(consultasData) {

}

// EXERCÍCIO 20
function calculaSaldo(contas) {

}