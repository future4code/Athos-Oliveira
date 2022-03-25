//Execicio 1
// const minhaString: string = 0
// const meuNumeero:number = "0"
// enum CorFavorita {
//   RED = "Vermelho",
//   GREEN = "Verde",
//   BLUE ="Azul",
//   YELLON ="Amarelo"

// }

// // type Pessoa = {
// // nome:string;
// // idade:number;
// // cor:CorFavorita;
// // }

// // const pessoa : Pessoa ={
// // nome :"ath",
// // idade : 69,
// // cor:CorFavorita.BLUE
// // }

// // console.table(pessoa)

// //execicio 2


// type Obter = {
//   maior:number,
//   menor:number,
//   media:number,
//   }

// const notas:number[] = [21, 18, 65, 44, 15, 18]

// function obterEstatisticas(numeros:number[]):number {

//   const numerosOrdenados:number[] = numeros.sort((a, b) => a - b)
 


//   let mun:number = 0 
//   let soma:number = 0

//   for (let num of numeros) {
//       soma += num
//   }

//   const estatisticas: any = {
//       maior: numerosOrdenados[numeros.length - 1],
//       menor: numerosOrdenados[0],
//       media: soma / numeros.length
//   }

//   return estatisticas
// }
//  console.table(obterEstatisticas(notas))


//execicio 3
// type Lista = {
//   autor:string,
//   texto:string
// }

// const posts:Lista[] = [
//   {
//     autor: "Alvo Dumbledore",
//     texto: "Não vale a pena viver sonhando e se esquecer de viver"
//   },
//   {
//     autor: "Severo Snape",
//     texto: "Menos 10 pontos para Grifinória!"
//   },
//   {
//     autor: "Hermione Granger",
//     texto: "É levi-ô-sa, não levio-sá!"
//   },
//   {
//     autor: "Dobby",
//     texto: "Dobby é um elfo livre!"
//   },
//   {
//     autor: "Lord Voldemort",
//     texto: "Avada Kedavra!"
//   }
// ]
// function buscarPostsPorAutor(posts:Lista[], autorInformado?:string):Lista[] {
//   return posts.filter((post) => {return post.autor !== autorInformado}
//   )
// }
//  console.table(buscarPostsPorAutor(posts))

//execicio 5
// type Consulta = {
//   nome:string;
//   idade:number;
//   dataDaConsulta:string;
// }

// const consultas: Consulta[] = [
//   {nome: "Maria", idade: 22, dataDaConsulta: "01/01/2011"},
//   {nome: "Luigi", idade: 12, dataDaConsulta: "01/01/2001"},
//   {nome: "Mario", idade: 76, dataDaConsulta: "01/01/2021"}
// ]
// function ordenaConsulta(consulta:Consulta[]):Consulta[]{
//   const consultaOrdenada: Consulta[] = consulta.sort((a,b)=>{
//     return a.nome.localeCompare(b.nome)
//   })
// return consultaOrdenada
// }
// console.table(ordenaConsulta(consultas))