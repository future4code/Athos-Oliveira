let nome = prompt("Informe seu nome")
let idade = prompt("informe a sua idade") 
let email = prompt("agora seu email")
console.log("Meu nome é",nome",tenho",idade,"anos, e o meu email é ",email,".")
// //Questao 1
// let nome 
// let idade
// console.log("variavel nome do tipo ", typeof nome)
// console.log("variavel idade do tipo ", typeof idade)
// //Resposta 1: 
// //Declarei a variavel nome do tipo const, o console apresentou erro, mas quando usei let para o nome o valor foi indefinido, pois a variavel nao recebeu nenhum valor para que o JS identifique qual seu tipo.

// nome = prompt("informe seu Nome:")
// idade = prompt("infomr a sua Idade:")
// console.log("variavel nome do tipo ", typeof nome)
// console.log("variavel idade do tipo ", typeof idade)
// //Resposta:
// console.log("Ola",nome,",você tem",idade,"anos.")
// //Resposta 2 ambos os tipos das variaveis sao String, tudo que é informado no prompt, é interpretado como texto.


// let acessorio = prompt("Voce esta usando Bone?")
// let corBlusa = prompt("Voce esta de blusa preta?")
// let qualFilme = prompt("Voce assistiu Senhor dos Aneis?")
// console.log("Voce esta usando Bone? ",acessorio)
// console.log("Voce esta de blusa preta? ",corBlusa)
// console.log("Voce assistiu Senhor dos Aneis? ",qualFilme)

// //Questao 3
//  let a = 10
//  let b = 25

// // // Aqui faremos uma lógica para trocar os valores
//  let c = a
//  a = b
//  b = c

// // Depois de trocados, teremos o seguinte resultado:
//  console.log("O novo valor de a é", a) // O novo valor de a é 25
//  console.log("O novo valor de b é", b) // O novo valor de b é 10

//  //DESAFIO
// let x = prompt("informe o primeiro valor")
// let y  = prompt("informe o segundo valor")
// let valor1 = Number(x)
// let valor2 = Number(y)
// let resultadoSoma = valor1+valor2
// let resultadoMulti = x*y
// console.log("A soma dos valores são: ", resultadoSoma)
// console.log("A multiplicação dos valroes são: ", resultadoMulti)
// //quando informei na variavel resultadoSoma x+y o JS juntou os numeros.
// //mas com x*y nao ocorreu.