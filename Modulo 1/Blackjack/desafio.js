/**
 * EXEMPLO DE UTILIZAÇÃO DA 'comprarCarta'
 * 
 * 
    const carta = comprarCarta(); // Sorteia uma carta. Por exemplo, o rei de ouros
    
    console.log(carta.texto) // imprime o texto da carta. Exemplo: "K♦️" (indica "K" de ouros)
    console.log(carta.valor) // imprime o valor da carta (um número). Exemplo: 10 (dado que "K" vale 10)
 * Suas cartas são XX. A carta revelada do computador é X.
    Deseja comprar mais uma carta?

    Cancelar mostra resultado
 * 
 * 
 */
   // if(confirm("Boas vindas ao jogo de Blackjack! \n Quer iniciar uma nova rodada?")){
      let resposta = ""
      let maoUser =[] 
      let maoCpu = [] 

    //  let resultadoUser = carta1.valor + carta2.valor 
   for(let i = 0; i < 2 ; i++){
      maoUser.push(comprarCarta())
      maoCpu.push(comprarCarta())
     
      console.log(maoCpu[i],maoUser[i])
   }
 

      // carta1 = comprarCarta()
      // carta2 = comprarCarta()
      // let resultadoAI = carta1.valor + carta2.valor

      // if(carta1.valor == 11 && carta2.valor == 11){
      //    alert(" Apareceu dois AA, Aguarde Rembaralhar")
      //    carta1 = comprarCarta()
      //    carta2 = comprarCarta()
      //    resultadoUser = carta1.valor + carta2.valor 
      
      //    carta1 = comprarCarta()
      //    carta2 = comprarCarta()
      //    resultadoAI = carta1.valor + carta2.valor 
      // }
  
      // if(confirm(`Suas cartas são ${carta1.texto} ${carta2.texto}. \n A carta revelada do computador é ${carta1.texto}.\n Deseja comprar mais uma carta?`)){
        

      // }
      //  else {

      //    if(resultadoUser > resultadoAI && resultadoUser <= 21 ){
      //       resposta ="O usuário ganhou!"                
      //    } else if(resultadoAI > resultadoUser &&  resultadoAI <= 21){
      //       resposta = "O computador ganhou!"          
      //    } else if(resultadoAI > 21 && resultadoUser <= 21){
      //        resposta = "O usuário ganhou!"           
      //    } else if(resultadoUser > 21 && resultadoAI <= 21){
      //       resposta = "O computador ganhou!"           
      //    } else {
      //       resposta = "O usuário ganhou!"           
      //    } 
      //    alert(`Usuário - cartas: ${carta1.texto} ${carta2.texto}  - pontuação ${resultadoUser} \n Computador - cartas: ${carta1.texto} ${carta2.texto}  - pontuação ${resultadoAI} \n ${resposta} `)
           
      // }

         
   // }else{
   //    alert("O jogo acabou")
   // }

