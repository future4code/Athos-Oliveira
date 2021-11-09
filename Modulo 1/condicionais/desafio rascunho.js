
//PRIMEIRO METODO QUE USEI NA 2 DO DESAFIO  
let calculoDola = (qt, preço1) =>{ let totalDola = qt * (4.10 *preço1) 
    return totalDola}
let calculoReal = (qt, preço2) =>{ let totalReal = qt * (preço2) 
    return totalReal}

let clienteNome = "JOAO"//prompt("Informe o Nome do Cliente")
let tipoDeJogo = "DO"//prompt("informe IN - jogo Internacional ou DO - jogo Domestico")
let jogo = "FI" //prompt("Informe SF - Semi - FInal, FI - FInal ou DT Decisao do 3ºlugar ")
let categoria = 2 //Number(prompt("Informe a Categororia de 1 a 4 na arquibancada"))
let quantidade  //Number(prompt("Informe a quantidade de ingressos"))
let total
calculoDola(quantidade = 2)
calculoReal(quantidade =2)

if("IN" === tipoDeJogo){
if(jogo === "SF"){
switch(categoria){
case 1:
total = quantidade * (4.10 *1320) 
console.log(`
---Dados da compra--- 
Nome do cliente:  ${clienteNome} 
Tipo do jogo:  Internacional 
Etapa do jogo:  Semi-Final 
Categoria:  1 
quantidade de Ingressos:  ${quantidade}  ingressos 
---Valores--- 
Valor do ingresso:  R$ 1320.00
Valor total:  R$ ${calculoDola(quantidade, 1320)}
${jogo}`)
break;
case 2:
total = quantidade * (4.10 *880) 
console.log(`
---Dados da compra--- 
Nome do cliente:  ${clienteNome} 
Tipo do jogo:  Internacional 
Etapa do jogo:  Semi-Final 
Categoria:  2 
quantidade de Ingressos:  ${quantidade}  ingressos 
---Valores--- 
Valor do ingresso:  R$ 880.00
Valor total:  R$ ${calculoDola(quantidade, 880)}
${jogo}`)
break;
case 3:
let total3 = quantidade * (4.10 *550) 
console.log(`
---Dados da compra--- 
Nome do cliente:  ${clienteNome} 
Tipo do jogo:  Internacional 
Etapa do jogo:  Semi-Final 
Categoria:  3 
quantidade de Ingressos:  ${quantidade}  ingressos 
---Valores--- 
Valor do ingresso:  R$ 550.00
Valor total:  R$ ${calculoDola(quantidade, 550)}
${jogo}`)
break;
case 4:
total = quantidade * (4.10 *220) 
console.log(`
---Dados da compra--- 
Nome do cliente:  ${clienteNome} 
Tipo do jogo:  Internacional 
Etapa do jogo:  Semi-Final 
Categoria:  4 
quantidade de Ingressos:  ${quantidade}  ingressos 
---Valores--- 
Valor do ingresso:  R$ 220.00
Valor total:  R$ ${calculoDola(quantidade, 220)}
${jogo}`)
break;
}
} else if(jogo === "DT") {
switch(categoria){
case 1:
total = quantidade * (4.10 *660) 
console.log(`
---Dados da compra--- 
Nome do cliente:  ${clienteNome} 
Tipo do jogo:  Internacional 
Etapa do jogo:  Decisão do 3°Lugar
Categoria:  1 
quantidade de Ingressos:  ${quantidade}  ingressos 
---Valores--- 
Valor do ingresso:  R$ 660.00
Valor total:  R$ ${total}
${jogo}`)
break;
case 2:
total = quantidade * (4.10 *440) 
console.log(`
---Dados da compra--- 
Nome do cliente:  ${clienteNome} 
Tipo do jogo:  Internacional 
Etapa do jogo:  Decisão do 3°Lugar
Categoria:  2 
quantidade de Ingressos:  ${quantidade}  ingressos 
---Valores--- 
Valor do ingresso:  R$ 440.00
Valor total:  R$ ${total}
${jogo}`)
break;
    case 3:
total = quantidade * (4.10 *330) 
    console.log(`
---Dados da compra--- 
Nome do cliente:  ${clienteNome} 
Tipo do jogo:  Internacional 
Etapa do jogo:  Decisão do 3°Lugar
Categoria:  3 
quantidade de Ingressos:  ${quantidade}  ingressos 
---Valores--- 
Valor do ingresso:  R$ 330.00
Valor total:  R$ ${total}
${jogo}`)
break;
case 4:
total = quantidade * (4.10 *170) 
console.log(`
---Dados da compra--- 
Nome do cliente:  ${clienteNome} 
Tipo do jogo:  Internacional 
Etapa do jogo:  Decisão do 3°Lugar
Categoria:  4 
quantidade de Ingressos:  ${quantidade}  ingressos 
---Valores--- 
Valor do ingresso:  R$ 170.00
Valor total:  R$ ${total}
${jogo}`)
break;
}
} else if(jogo === "FI"){
switch(categoria){
case 1:
total = quantidade * (4.10 *1980) 
console.log(`
---Dados da compra--- 
Nome do cliente:  ${clienteNome} 
Tipo do jogo:  Internacional 
Etapa do jogo:  Decisão do 3°Lugar
Categoria:  1 
quantidade de Ingressos:  ${quantidade}  ingressos 
---Valores--- 
Valor do ingresso:  R$ 1980.00
Valor total:  R$ ${total}
${jogo}`)
break;
case 2:
total = quantidade * (4.10 *1320) 
console.log(`
---Dados da compra--- 
Nome do cliente:  ${clienteNome} 
Tipo do jogo:  Internacional 
Etapa do jogo:  Decisão do 3°Lugar
Categoria:  2 
quantidade de Ingressos:  ${quantidade}  ingressos 
---Valores--- 
Valor do ingresso:  R$ 1320.00
Valor total:  R$ ${total}
${jogo}`)
break;
case 3:
total = quantidade * (4.10 *880) 
console.log(`
---Dados da compra--- 
Nome do cliente:  ${clienteNome} 
Tipo do jogo:  Internacional 
Etapa do jogo:  Final
Categoria:  3 
quantidade de Ingressos:  ${quantidade}  ingressos 
---Valores--- 
Valor do ingresso:  R$ 880.00
Valor total:  R$ ${total}
${jogo}`)
break;
case 4:
total = quantidade * (4.10 *330) 
console.log(`
---Dados da compra--- 
Nome do cliente:  ${clienteNome} 
Tipo do jogo:  Internacional 
Etapa do jogo:  Final
Categoria:  4 
quantidade de Ingressos:  ${quantidade}  ingressos 
---Valores--- 
Valor do ingresso:  R$ 330.00
Valor total:  R$ ${total}
${jogo}`)
break;
}
}
} else if("DO" === tipoDeJogo){

if(jogo === "SF"){

switch(categoria){
case 1:

total = quantidade * (1320) 
console.log(`
---Dados da compra--- 
Nome do cliente:  ${clienteNome} 
Tipo do jogo:  Internacional 
Etapa do jogo:  Semi-Final 
Categoria:  1 
quantidade de Ingressos:  ${quantidade}  ingressos 
---Valores--- 
Valor do ingresso:  R$ 1320.00
Valor total:  R$ ${total}
SF`)
break;
case 2:

total = quantidade * (880) 
console.log(`
---Dados da compra--- 
Nome do cliente:  ${clienteNome} 
Tipo do jogo:  Internacional 
Etapa do jogo:  Semi-Final 
Categoria:  2 
quantidade de Ingressos:  ${quantidade}  ingressos 
---Valores--- 
Valor do ingresso:  R$ 880.00
Valor total:  R$ ${total}
SF`)
break;
case 3:
total = quantidade * (550) 
console.log(`
---Dados da compra--- 
Nome do cliente:  ${clienteNome} 
Tipo do jogo:  Internacional 
Etapa do jogo:  Semi-Final 
Categoria:  3 
quantidade de Ingressos:  ${quantidade}  ingressos 
---Valores--- 
Valor do ingresso:  R$ 550.00
Valor total:  R$ ${total}
SF`)
break;
case 4:
let total = quantidade * (220) 
console.log(`
---Dados da compra--- 
Nome do cliente:  ${clienteNome} 
Tipo do jogo:  Internacional 
Etapa do jogo:  Semi-Final 
Categoria:  4 
quantidade de Ingressos:  ${quantidade}  ingressos 
---Valores--- 
Valor do ingresso:  R$ 220.00
Valor total:  R$ ${total}
SF`)
break;
}
} else if(jogo === "DT") {
switch(categoria){
case 1:
let total = quantidade * (660) 
console.log(`
---Dados da compra--- 
Nome do cliente:  ${clienteNome} 
Tipo do jogo:  Internacional 
Etapa do jogo:  Decisão do 3°Lugar
Categoria:  1 
quantidade de Ingressos:  ${quantidade}  ingressos 
---Valores--- 
Valor do ingresso:  R$ 660.00
Valor total:  R$ ${total}
${jogo}`)
break;
case 2:
//let quantidade  =   Number(prompt("Informe a quantidade de ingressos"))
total = quantidade * (440) 
console.log(`
---Dados da compra--- 
Nome do cliente:  ${clienteNome} 
Tipo do jogo:  Internacional 
Etapa do jogo:  Decisão do 3°Lugar
Categoria:  2 
quantidade de Ingressos:  ${quantidade}  ingressos 
---Valores--- 
Valor do ingresso:  R$ 440.00
Valor total:  R$ ${total}
${jogo}`)
break;
case 3:
total = quantidade * (330) 
console.log(`
---Dados da compra--- 
Nome do cliente:  ${clienteNome} 
Tipo do jogo:  Internacional 
Etapa do jogo:  Decisão do 3°Lugar
Categoria:  3 
quantidade de Ingressos:  ${quantidade}  ingressos 
---Valores--- 
Valor do ingresso:  R$ 330.00
Valor total:  R$ ${total}
${jogo}`)
break;
case 4:
//let quantidade  =   Number(prompt("Informe a quantidade de ingressos"))
total = quantidade * (170) 
console.log(`
---Dados da compra--- 
Nome do cliente:  ${clienteNome} 
Tipo do jogo:  Internacional 
Etapa do jogo:  Decisão do 3°Lugar
Categoria:  4 
quantidade de Ingressos:  ${quantidade}  ingressos 
---Valores--- 
Valor do ingresso:  R$ 170.00
Valor total:  R$ ${total}
${jogo}`)
break;
}
} else if(jogo === "FI"){
switch(categoria){
case 1:
total = quantidade * (1980) 
console.log(`
---Dados da compra--- 
Nome do cliente:  ${clienteNome} 
Tipo do jogo:  Internacional 
Etapa do jogo:  Decisão do 3°Lugar
Categoria:  1 
quantidade de Ingressos:  ${quantidade}  ingressos 
---Valores--- 
Valor do ingresso:  R$ 1980.00
Valor total:  R$ ${total}
${jogo}`)
break;
case 2:
total = quantidade * (1320) 
console.log(`
---Dados da compra--- 
Nome do cliente:  ${clienteNome} 
Tipo do jogo:  Internacional 
Etapa do jogo:  Decisão do 3°Lugar
Categoria:  2 
quantidade de Ingressos:  ${quantidade}  ingressos 
---Valores--- 
Valor do ingresso:  R$ 1320.00
Valor total:  R$ ${total}
${jogo}`)
break;
case 3:
total = quantidade * (880) 
console.log(`
---Dados da compra--- 
Nome do cliente:  ${clienteNome} 
Tipo do jogo:  Internacional 
Etapa do jogo:  Final
Categoria:  3 
quantidade de Ingressos:  ${quantidade}  ingressos 
---Valores--- 
Valor do ingresso:  R$ 880.00
Valor total:  R$ ${total}
${jogo}`)
break;
case 4:
total = quantidade * (330) 
console.log(`
---Dados da compra--- 
Nome do cliente:  ${clienteNome} 
Tipo do jogo:  Internacional 
Etapa do jogo:  Final
Categoria:  4 
quantidade de Ingressos:  ${quantidade}  ingressos 
---Valores--- 
Valor do ingresso:  R$ 330.00
Valor total:  R$ ${total}
${jogo}`)
break;
}
}
}
