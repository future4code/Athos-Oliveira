//Execicio 1
// let a:string = "Joao" 
// let b:string = "20/07/1987"
// function nomeIdade(name:string, age:string){
// let nome:string = name
// let data:string[] = age.split('/')
// return `Olá me chamo ${nome}, nasci no dia ${data[0]} do mês de ${data[1]} do ano de ${data[2]}` 
// }

//Execicio 2
//  function tipoQualquer(name:any){
//  let nome:any = name
//  return typeof nome
//  }
//  console.log(tipoQualquer(true))

//Execicio 3
// const enum GENERO {
// 	ACAO="ação",
// 	DRAMA="drama",
// 	COMEDIA="comédia",
// 	ROMANCE="romance",
// 	TERROR="terror"
// }
//  let a:string = "Joao" 
//  let b:number = 1987
// let d:number =72

//  function dadosFilme(name:string,age:number, tipo:GENERO, score?:number) {

// let nome = name
// let ano = age
// let genero = tipo
// let pontuacao = score
//  return  {nome, ano, genero ,pontuacao}
//  }

// console.log(dadosFilme(a,b,GENERO.ACAO,d))
//Execicio 4 FILTER + ENUM
// enum SETOR {
// 	MARKETING="marketing",
// 	VENDAS="vendas",
// 	FINANCEIRO="financeiro"
// }
// type Pessoa = {
//     nome:string,
//     setor:string,
//     salário:number,
//     presencial:boolean
// }

// const lista:Pessoa[] = [
// 	{ nome: "Marcos", salário: 2500, setor:SETOR.MARKETING , presencial: true },
// 	{ nome: "Maria" ,salário: 1500, setor:SETOR.VENDAS, presencial: false},
// 	{ nome: "Salete" ,salário: 2200, setor:SETOR.FINANCEIRO, presencial: true},
// 	{ nome: "João" ,salário: 2800, setor:SETOR.MARKETING, presencial: false},
// 	{ nome: "Josué" ,salário: 5500, setor:SETOR.FINANCEIRO, presencial: true},
// 	{ nome: "Natalia" ,salário: 4700, setor:SETOR.VENDAS, presencial: true},
// 	{ nome: "Paola" ,salário: 3500, setor:SETOR.MARKETING, presencial: true }
// ]

//  function buscaPessoas(dado:Pessoa[]):Pessoa[] {
//      const presencialmente = dado.filter(function(obj) { return obj.presencial == true; });
//      const marketings = presencialmente.filter(function(obj) { return obj.setor == SETOR.MARKETING; });
//      return marketings
//  }
//   console.table(buscaPessoas(lista))
//Execicio 5
// type Usuarios ={
//     name:string,
//     email:string,
//     role:string
// }
// const lista:Usuarios[] = [
// 	{name: "Rogério", email: "roger@email.com", role: "user"},
// 	{name: "Ademir", email: "ademir@email.com", role: "admin"},
// 	{name: "Aline", email: "aline@email.com", role: "user"},
// 	{name: "Jéssica", email: "jessica@email.com", role: "user"},  
// 	{name: "Adilson", email: "adilson@email.com", role: "user"},  
// 	{name: "Carina", email: "carina@email.com", role: "admin"}      
// ] 
//  function buscaPessoas(dado:Usuarios[]): string[]{
//       const admin = dado.filter(function(obj) { return obj.role == "admin"; });
//       const email = admin.map(function(obj){return obj.email})
//      let x:string[] = email
//       return x
//  }
//  console.table(buscaPessoas(lista))
//execicio 6

// type dadosUsuario = {
//     cliente: string,
//     saldoTotal: number,
//     debitos: number[]
// };

// const clientes: dadosUsuario[] = [
// 	{ cliente: "João", saldoTotal: 1000, debitos: [100, 200, 300] },
// 	{ cliente: "Paula", saldoTotal: 7500, debitos: [200, 1040] },
// 	{ cliente: "Pedro", saldoTotal: 10000, debitos: [5140, 6100, 100, 2000] },
// 	{ cliente: "Luciano", saldoTotal: 100, debitos: [100, 200, 1700] },
// 	{ cliente: "Artur", saldoTotal: 1800, debitos: [200, 300] },
// 	{ cliente: "Soter", saldoTotal: 1200, debitos: [] }
// ]
// const  ajusteSaldo = (dados:dadosUsuario[]):dadosUsuario[] => {
// const total:dadosUsuario[] = dados
// .map(dado =>{
//     const debitos:number = dado.debitos.reduce((a, b) => a + b, 0)
//     const novaLista:dadosUsuario = {...dado, saldoTotal: dado.saldoTotal - debitos, debitos:[]}
//     return novaLista
// }).filter(dado => dado.saldoTotal<0)
// return total
// }
// console.table(ajusteSaldo(clientes))
// Execicio 7
type tipoEstoque = {
    nome: string,
    quantidade: number,
    valorUnitario: number|string
}
const estoque:tipoEstoque[] = [
	{ nome: "MacMugffin", quantidade: 37, valorUnitario: 51.040},
	{ nome: "Vassoura voadora", quantidade: 56, valorUnitario: 210.0},
	{ nome: "Laço da verdade", quantidade: 32, valorUnitario: 571.5},
	{ nome: "O precioso", quantidade: 1, valorUnitario: 9181.923},
	{ nome: "Caneta de 250 cores", quantidade: 123, valorUnitario: 17},
	{ nome: "Plumbus", quantidade: 13, valorUnitario: 140.44},
	{ nome: "Pokebola", quantidade: 200, valorUnitario: 99.9915}
]

 function ordenaEstoque(consulta:tipoEstoque[]){
   const consultaEstoque: tipoEstoque[] = consulta.sort((a,b)=>{return a.quantidade - b.quantidade})
return consultaEstoque
}
const ajustaPreco = (preco :number): string => {
	const valorAjustado: string = preco.toFixed(2).replace('.', ',')
	return "R$ "+valorAjustado
}
const [a]: any = ordenaEstoque(estoque)


 console.table(ajustaPreco(a))