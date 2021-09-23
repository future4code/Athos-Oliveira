//Exercícios de interpretação de código
//1
//a) O resto 0 informa que um numero divisivel por dois e par, a expeçao confirma se o numeor e ou nao divisivel por 2  
//b) numeros pares iram passar no teste.
//c) numero impares.
//2
//a) verifica o noem das frutas e retorna no console o nome da fruta e o preço para ela.
//b)"O preço da fruta ", Maça, " é ", "R$ ", 2.25
//c) console.log("O preço da fruta ", Pera, " é ", "R$ ", 5)  mostra o valor do Default no preço pois pulou o Case sem o break
//3
//a) declarou uma variavel apra receber um valro do tipo numerico.
//b)   "Esse número passou no teste"  e se usar -10 nao aparecera nada no console.
//c) sim a variavel mensagem nao e de escopo global apra ser usada fora do IF.
//
//Exercícios de escrita de código
//1
//const idade = Number(prompt("infomre sua idade"))
// if (idade > 18) {
//     console.log("Você pode dirigir.")
// } else {
//     console.log("Você não pode dirigir.")   
// }
//2
// const turno = prompt("Infome seu turno:  M - Matutino, V - Vespertino, N - Noturno")
// if (turno === "M"){
//     console.log("Bom Dia.")
// } else if (turno  === "V") {
//     console.log("Bom Tarde.")
// } else if (turno  === "N") {
//     console.log("Bom Noite.")
// }
//3
// const turno = prompt("Infome seu turno:  M - Matutino, V - Vespertino, N - Noturno")
// switch (turno) {
//     case "M":
//         console.log("Bom Dia.")
//       break;
//     case "V":
//         console.log("Bom Tarde.")
//       break;
//     case "N":
//         console.log("Bom Noite.")
//       break;
//     default:
//         console.log("ERROR: Infome seu turno:  M - Matutino, V - Vespertino, N - Noturno")
//       break;
//   }
//4
// const genero = prompt("Informe somente o Genero do Filme")
// const valorIngresso = Number(prompt("Informe o Valor do Ingresso"))
// if("fantasia" === genero && valorIngresso < 15){
//     console.log("Bom Filme!!")
//     } else {
//         console.log("Escolha outro Filme")
//     }
//Desafio
//1
// const genero = prompt("Informe somente o Genero do Filme")
// const valorIngresso = Number(prompt("Informe o Valor do Ingresso"))
//  if("fantasia" === genero && valorIngresso < 15){
//     let LANCHINHO = prompt("qual lanchinho voce vai querer comprar ")
//      console.log(`Bom Filme!! e Aproveite seu/sua ${LANCHINHO}.`)
//     } else {
//         console.log("Escolha outro Filme")
//     }
//2 SEGUNDO METODO QUE USEI NO DESAFIO


const calculo = (qt, preço1) =>{
let total
switch(tipoDeJogo){
case "jogo Internacional":
total = qt * (4.10 *preço1) 
break;
case "jogo Domestico":
total = qt * (preço1) 
break;  
}
return total 
}


function cases(categoriaX){ 
switch(categoriaX){
case 1:
console.log(resultado)
break;
case 2:
console.log(resultado)
break;
case 3:
console.log(resultado)
break;
case 4:
console.log(resultado)
break;
default:
console.log("ERRO: somente Numeros 1 a 4")
break;
}
}

function categoriaPreco(x){ 
     if( jogo === "SF" && categoria === 1){  x = 1320} 
else if( jogo === "SF" && categoria === 2){  x = 880}
else if( jogo === "SF" && categoria === 3){  x = 550}
else if( jogo === "SF" && categoria === 4){  x = 220}
else if( jogo === "FI" && categoria === 1){  x = 1980}
else if( jogo === "FI" && categoria === 2){  x = 1320}
else if( jogo === "FI" && categoria === 3){  x = 880}
else if( jogo === "FI" && categoria === 4){  x = 330}
else if( jogo === "DT" && categoria === 2){  x = 660}
else if( jogo === "DT" && categoria === 3){  x = 440}
else if( jogo === "DT" && categoria === 4){  x = 330}
else if( jogo === "DT" && categoria === 4){  x = 170}     
return x
}

const clienteNome = prompt("Informe o Nome do Cliente")
let tipoDeJogo = prompt("informe IN - jogo Internacional ou DO - jogo Domestico")
let jogo = prompt("Informe SF - Semi - FInal, FI - FInal ou DT Decisao do 3ºlugar ")
let categoria  = Number(prompt("Informe a Categororia de 1 a 4 na arquibancada"))
let quantidade = Number(prompt("Informe a quantidade de ingressos"))
let preco = categoriaPreco()



switch(tipoDeJogo){
case "DO":
tipoDeJogo = "jogo Domestico"
break;
case "IN":
tipoDeJogo = "jogo Internacional"
break;
default:
console.log("ERRO: somente Iniciais DO ou IN, Maiusculas")
break;
}

switch(jogo){
case "SF":
jogo = "Semi - Final"
break;
case "FI":
jogo = "Final"
break;
case "DT":
jogo = "Decisao do 3ºlugar"
break;
default:
console.log("ERRO: somente Iniciais, DT, SF ou FI, Maiusculas")
break;
}

let resultado = (`
---Dados da compra--- 
Nome do cliente:  ${clienteNome} 
Tipo do jogo:  ${tipoDeJogo}  
Etapa do jogo: ${jogo}  
Categoria:  ${categoria} 
quantidade de Ingressos:  ${quantidade}  ingressos 
---Valores--- 
Valor do ingresso:  R$ ${categoriaPreco(preco)} 
Valor total:  R$ ${calculo(preco,quantidade)}
${jogo}`)


cases(categoria)
categoriaPreco(categoria)
calculo(preco)



if("IN" === tipoDeJogo.toUpperCase){
if(jogo.toUpperCase === "SF"){
cases(categoria)

} else if(jogo.toUpperCase === "DT") {
cases(categoria)

} else if(jogo.toUpperCase === "FI"){
cases(categoria)

}
} 
else if("DO" === tipoDeJogo.toUpperCase){
if(jogo.toUpperCase === "SF"){
cases(categoria)

} else if(jogo.toUpperCase === "DT") {
cases(categoria)

} else if(jogo.toUpperCase === "FI"){
cases(categoria)

}
}

