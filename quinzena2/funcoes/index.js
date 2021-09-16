// --- LEITURA DE CODIGO ------------------------------------------------------------------

//1 R:
//a. sera impresso 10 e 50
//b. Nada acontece no console

// 2 R:
// a. a função retorna retorna verdadeiro ou falso pois o incluves ira verificar se a palavra cenoura 
// b. True, True, True

// --- ESCRITA DE CODIGO ------------------------------------------------------------------
//1 R:
//a.---------------------------------------------------------------------------------------
// function dadosSobreMin(){
// const texto = "Eu sou Athos, tenho 34 anos, moro em Teixeria de Freitas e sou estudante."
// console.log(texto)
// }
// dadosSobreMin()
//b.---------------------------------------------------------------------------------------
// function imprimeOlaNome(nome, idade, cidade, profissao){
//      const  stringTx = (`Eu sou ${nome}, tenho ${idade} anos, moro em ${cidade} e sou ${profissao}.`)
//      console.log(`Eu sou ${nome}, tenho ${idade} anos, moro em ${cidade} e sou ${profissao}.`)
//   }
//    imprimeOlaNome('Athos','34',"Teixeira","Estudante")
//---------------------------------------------------------------------------------------
//2 R:
//a.---------------------------------------------------------------------------------------
// function numeros(num1, num2){
//     const soma = num1 + num2
//     return soma
// }
// let resultado = numeros(3, 3)
// console.log(resultado)
// b.---------------------------------------------------------------------------------------
// function numerosBol(num1, num2){
//      const compare = num1 >= num2
//      return compare
//     }
//     //let resultado2 = numerosBol(1, 3)
//     console.log("maior, menor ou igual? " + numerosBol(1,3))
//     console.log("maior, menor ou igual? " + numerosBol(3,3))
//     console.log("maior, menor ou igual? " + numerosBol(3,2))
// //c.---------------------------------------------------------------------------------------
// function numerosMod(num1, num2){
//     const compare = num1 % num2 === 0
//     return compare
//    }
//    //let resultado2 = numerosMod(1, 3)
//    console.log(`Esse é par? ${numerosMod(20,2)}`)
//    console.log(`Esse é par? ${numerosMod(11,2)}`)
//    console.log(`Esse é par? ${numerosMod(20,4)}`)
//d.---------------------------------------------------------------------------------------
// let textoEntrada = prompt("informe um texto:")
// 
//function tamanhoTexto(texto){
//      const textoTeste = textoEntrada.toUpperCase()
//      return textoTeste
// }
// const resultado = tamanhoTexto()
// const tamanho = resultado.length
// console.log("Usando o Return: "+ resultado + ", tamanho: "+ tamanho)
//---------------------------------------------------------------------------------------
//3 R:
// let num1 = Number(prompt("Informe o Primeiro Numero: "))
// let num2  = Number(prompt("Informe o Segundo Numero: "))  
// function superCalculadora(){
//  let soma = num1 + num2
//  let sub = num1 - num2
//  let div = num1 / num2
//  let mult = num1 * num2
//   console.log("Números inseridos: "+ num1 + " e "+ num2)
//   console.log("Soma: " + soma)
//   console.log("Diferença: "+ sub)
//   console.log("Multiplicação: "+ mult )
//   console.log("Divisão: "+ div) 
//   }
//  superCalculadora()

/* Consegui fazer de duas formas essa é a segunda: */

// let num1 = Number(prompt("Informe o Primeiro Numero: "))
// let num2  = Number(prompt("Informe o Segundo Numero: "))  
// let num1 = 12
// let num2 = 4
// function operacao() {
//     let soma = num1 + num2
//     let mult = num1 * num2
//     let div = num1 / num2
//     let subs = num1 - num2
//     return [ soma, mult, div,  subs ]
//     }
//     let [resultadoSoma, resultadoMult, resultadoDiv, resultadoSubs] = operacao()
//   console.log(`Números inseridos: ${num1} e ${num2}`)
//   console.log(`Soma: ${resultadoSoma}`)
//   console.log(`Diferença:  ${resultadoSubs}`)
//   console.log(`Multiplicação: ${resultadoMult}` )
//   console.log(`Divisão: ${resultadoDiv}`)
    
    

// --- DESAFIO ------------------------------------------------------------------
//1 R:
//a.---------------------------------------------------------------------------------------

// const imprimeMensagem = (mensagem) => {
//   let entraMensagem = (mensagem)
// console.log("resultado:", entraMensagem)
// }
// let  resposta = imprimeMensagem("Estou enviando uma Resposta")



//b.---------------------------------------------------------------------------------------
// const imprimeMensagem = (mensagem) => {
//   let entraMensagem = (mensagem)
// console.log("resultado:", entraMensagem)
// }
// const SomaValores = (valor1, valor2) => {
//   let soma = valor1 + valor2
//   imprimeMensagem(soma)
// }

// SomaValores(2, 4)



//.---------------------------------------------------------------------------------------
//2 R:  fiz de 3 formas, pois estava testando. entradas em area1 e area2 servem para o codigo todo.

// let area1 = Number(prompt("Inseira a area do quadrado"))
// let area2 = Number(prompt("Inseira a Segunda area do quadrado"))

// function formulaPitagoras1(){
//  let calculo = Math.pow(area1, 2) + Math.pow(area2, 2)
//  let resultado1 = Math.sqrt(calculo)
//   return resultado1
// }

// let resposta = formulaPitagoras1()
// console.log("usando math.sqrt e math.pow: ", resposta)
//
// function formulaPitagoras2(){
//   let resultado2 = Math.hypot(area1, area2)
//    return resultado2
//  }
 
//  let resposta2 = formulaPitagoras2()
//  console.log("usando math.hypo: ", resposta2)
// 
//  function formulaPitagoras3(){
//   let calc  = (area1 * area1) + (area2 * area2)
//   resultado3 = calc ** (1/2)
//    return resultado3
//  }
//  let resposta3 = formulaPitagoras3()
//  console.log("usando a Raiz Inversa sem Metodo ", resposta3)



