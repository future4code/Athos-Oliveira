//Execicio de interpretação de codigo
//1 R:

//a. mostra o array como indefinido, pois nada foi declarado dentro dele.

//b. mostra o array com valor null (nulo)

//c. mostra o tamanho em campos do array

//d. declara o indice do array na posição inical zero e mostra a posição do indice

//e. conta a posição inicial do indice[0] +1 e adiciona o 19 na posicao 1 do array

//f. declarou uma variavel que recebeu um array, pegou o valor do indice e andou + 6 campos no array, mostrando o contedudo que esta armazenado no array: 9, se no lugar do 9 fosse 20 iria mostrar 20.

//2 R:
//SUBI NUM ÔNIBUS EM MIRROCOS 27

//Execicio de escrita de codigo
// //1 R:
// const nomeDoUsuario = prompt("Informe o seu Nome: ") 
// const emailDoUsuario = prompt("Informe seu e-mail: ")
// console.log(`O e-mail ${emailDoUsuario} foi cadastrado com sucesso. Seja bem-vinda(o), ${nomeDoUsuario}!`)

//2 R:
// const comidaFavorita = ["churrasco" , "pizza" , "lasanha" , "sushi", "yakisoba"]
// console.log(comidaFavorita)
// console.log(`Essas são as minhas comidas preferidas:\n ${comidaFavorita[0]} \n ${comidaFavorita[1]}\n ${comidaFavorita[2]} \n ${comidaFavorita[3]} \n ${comidaFavorita[4]}.`)
// let indice = 0
// comidaFavorita[indice+1] = prompt("informe uma comida p/ trocar a segunda: ") 
// console.log(comidaFavorita)

//3 R:
// let tarefa = []
// let listaDeTarefas = tarefa
// tarefa[0] = prompt("Informei sua 1° tarefa")
// tarefa[1] = prompt("Informei sua 2° tarefa")
// tarefa[2] = prompt("Informei sua 3° tarefa")
// console.log(tarefa)
// listaDeTarefas = tarefa.splice(Number(prompt("numero")),1)
// console.log(tarefa)

//DESAFIO
//1 R:
// let listaPalavras = []
// let frase = prompt("Informe uma frase de qualquer tamanho: ")
// listaPalavras = frase.split(" ") 
// console.log(listaPalavras)
/*show*/

//2 R:
// const frutas = ["Banana", "Morango", "Abacaxi", "Laranja", "Ameixa"]
// console.log("indice do Abacaxi: ",frutas.indexOf("Abacaxi"))
// console.log("Tamanho do Array: ", frutas.length)
