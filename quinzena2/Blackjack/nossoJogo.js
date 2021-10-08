/**
 * EXEMPLO DE UTILIZAÇÃO DA 'comprarCarta'
 * 
 * 
    const carta = comprarCarta(); // Sorteia uma carta. Por exemplo, o rei de ouros
    
    console.log(carta.texto) // imprime o texto da carta. Exemplo: "K♦️" (indica "K" de ouros)
    console.log(carta.valor) // imprime o valor da carta (um número). Exemplo: 10 (dado que "K" vale 10)
 * 
 * 
 * 
 */
//alert()
    if(confirm("Boas vindas ao jogo de Blackjack! \n Quer iniciar uma nova rodada?")){
      // o que fazer se o usuário clicar "ok"
     
     // console.log(carta.texto)
      //console.log(carta.valor)
      carta1 = comprarCarta()
      carta2 = comprarCarta()
      let resultadoUser = carta1.valor + carta2.valor 
   
      carta1 = comprarCarta()
      carta2 = comprarCarta()
      let resultadoAI = carta1.valor + carta2.valor 
      alert(`Usuário - cartas: ${carta1.texto} ${carta2.texto}  - pontuação ${resultadoUser}\nComputador - cartas: ${carta1.texto} ${carta2.texto}  - pontuação ${resultadoAI}` )
        
         if(resultadoUser == 21 ){
            alert("O usuário ganhou!")
         } else if(resultadoUser == 21){
          alert("O computador ganhou!")
         } else if(resultadoUser == resultadoAI){
            alert("Empate!")
         } else if(resultadoAI > resultadoUser){
            alert("O computador ganhou!")
         } else if(resultadoAI < resultadoUser){
            alert("O usuário ganhou!")
         } 
         
   }else{
      alert("O jogo acabou")
   }