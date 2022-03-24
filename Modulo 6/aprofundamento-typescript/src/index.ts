//Execicio 1
// const minhaString: string = 0
// const meuNumeero:number = "0"
// enum CorFavorita {
//   RED = "Vermelho",
//   GREEN = "Verde",
//   BLUE ="Azul",
//   YELLON ="Amarelo"

// }

// type Pessoa = {
// nome:string;
// idade:number;
// cor:CorFavorita;
// }

// const pessoa : Pessoa ={
// nome :"ath",
// idade : 69,
// cor:CorFavorita.BLUE
// }

// console.table(pessoa)

//execicio 2

// type AmostraDeDados ={
//   numeros:number

//   }

// const amostraDeIdades:AmostraDeDados = {

//   numeros: [21, 18, 65, 44, 15, 18],

//   obterEstatisticas: (numeros) => {...}
// }
let numeros1: [21, 18, 65, 44, 15, 18]
type TypeMestre ={
  numeros:number,
  soma:number,
  maior:number,
  menor:number,
  media:number
  }

function obterEstatisticas(numeros):number {
let a:any = 0
let b:any = 0
  const numerosOrdenados:any = numeros.sort(
      (a, b) => a - b
  )

  let soma:number = 0

  for (let num of numeros) {
      soma += num
  }

  const estatisticas = {
      maior: numerosOrdenados[numeros.length - 1],
      menor: numerosOrdenados[0],
      media: soma / numeros.length
  }

  return estatisticas
}
console.log(obterEstatisticas())