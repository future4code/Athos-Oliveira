// EXERCÍCIO 01
function inverteArray(array) {
  
    const  arryInvertido = [];
    for(let i = array.length - 1; i>=0;  i--) {
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
    if(valor % 2 === 0){
       return valor * valor
    }
  })
 
  return elevado
}
// EXERCÍCIO 03
function retornaNumerosPares(array) {


  let arryDePares = []
  for(let i = 0 ;i < array.length; i++) {
    if(array[i] % 2 ===0){
      arryDePares.push(array[i])
  }}
  return arryDePares

}
// EXERCÍCIO 04
function retornaMaiorNumero(array) {

let oNumeroMaior = -1

for(let i = 0; i < array.length; i++){
  if(array[i]>oNumeroMaior){
    oNumeroMaior=array[i]
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
 const resultadoComEeOU= (booleano1 && booleano2) || !booleano3
 const resultadoComOuEOu = (booleano2 || booleano3) && (booleano4 || booleano1)
 const resultadoNegando = !(booleano2 && booleano3) || !(booleano1 && booleano3)
 const resultadoNegandoEouEE =  !(booleano1) && !(booleano3) || (!booleano4 && booleano3 && booleano3)

  const respostas = [resultadoComE, resultadoComEeOU, resultadoComOuEOu, resultadoNegando, resultadoNegandoEouEE]
  return respostas
}

// EXERCÍCIO 07
function retornaNNumerosPares(n) {
const guardaNumeroPar =[]
let par = 0
for(let i = 0 ; i  < n; i++){

    guardaNumeroPar.push(par)
    par += 2

}
return guardaNumeroPar
}

// EXERCÍCIO 08
function checaTriangulo(a, b, c) {
  if(a !== b && a !== c && b !== c){
   return 'Escaleno' 
  }else if(a === b && a === c && b === c) {
   return 'Equilátero'
  } else if(a === b && b !== c && c !== a ) {
  return 'Isósceles'
  }
}

// EXERCÍCIO 09
function comparaDoisNumeros(num1, num2) {
  // Formato do objeto a ser retornado:
let  NumeroMaior  = 0
let  NumeroMenor = 0

if(num1 > num2) {
  NumeroMaior = num1
  NumeroMenor = num2
  
} else {
  NumeroMaior = num2
  NumeroMenor = num1
}

const divisaoDoMaior = NumeroMaior % NumeroMenor === 0
const diferencaNNumeros = NumeroMaior - NumeroMenor 
 
return { maiorNumero: NumeroMaior,
         maiorDivisivelPorMenor: divisaoDoMaior,
         diferenca: diferencaNNumeros
       }
}

// EXERCÍCIO 10
function segundoMaiorEMenor(array){
let verificaArray = array.length
for(let i = 0; i < verificaArray ; i++){
  for(let x = 0; x < verificaArray; x++ ){
    if(array[x]>array[x+1]){
       let reserva = array[x]
       array[x] = array[x + 1]
       array[x +1 ] = reserva
     }
   }
 }
return [array[array.length - 2], array[1]]
}


// EXERCÍCIO 11
function ordenaArray(array) {
    // implemente sua lógica aqui
    let verificaArray = array.length
    for(let i = 0; i < verificaArray ; i++){
      for(let x = 0; x < verificaArray; x++ ){
        if(array[x]>array[x+1]){
           let reserva = array[x]
           array[x] = array[x + 1]
           array[x +1 ] = reserva
         }
       }
     }
    return array
 
}

// EXERCÍCIO 12
function filmeFavorito() {

}

// EXERCÍCIO 13
function imprimeChamada() {
  // "Venha assistir ao filme NOME_DO_FILME, de ANO, dirigido por DIRECAO e estrelado por ELENCO."
}

// EXERCÍCIO 14
function criaRetangulo(lado1, lado2) {

}

// EXERCÍCIO 15
function anonimizaPessoa(pessoa) {

}

// EXERCÍCIO 16A
function maioresDe18(arrayDePessoas) {

}

// EXERCÍCIO 16B
function menoresDe18(arrayDePessoas) {

}

// EXERCÍCIO 17A
function multiplicaArrayPor2(array) {

}

// EXERCÍCIO 17B
function multiplicaArrayPor2S(array) {

}

// EXERCÍCIO 17C
function verificaParidade(array) {

}

// EXERCÍCIO 18A
function retornaPessoasAutorizadas(pessoas) {

}

// EXERCÍCIO 18B
function retornaPessoasNaoAutorizadas(pessoas) {

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
