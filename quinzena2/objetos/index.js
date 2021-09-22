//execicio de leitura
// R: 1) Matheus Nachtergaele
// Virginia Cavendish
// { canal: 'Globo', horario: '14h' }
// R: 2)
// a) Ocorre erro no metodo replaceAll devido ele ser utilisado em String
// b) O Sprees serve para copiar os artibutos de outro objeto.
//R: 3)
// a) false undefined
// b) apareceu false por que o atributo backender ja era false

// execicio de codigo
//
//R:1.a.)
// const pessoa = {
// nome : "Athos",
// apelido : ["Athinhos","bad boy","Gru" ]    
// }

//  const frase = (parametro) =>{
//      let retorno =`"Eu sou ${parametro.nome}, mas pode me chamar de: ${parametro.apelido[0]}, ${parametro.apelido[1]} ou ${parametro.apelido[2]}`    
//      return retorno
//  }
// console.log(frase(pessoa))
//R:1.b.)
// const pessoaAtualizada = {
//     ...pessoa,
//     apelido : ["Jogador","Moral","Nenhum"]
// }
// console.log(frase(pessoaAtualizada))
//R:2.)
// const individuo1 = {
//     nome : "Athos",
//     idade : 34,
//     profissao : "Produtc Ower"
// }
// const individuo2 = {
//     nome : "Oliveira",
//     idade : 33,
//     profissao : "Analista de teste"
// }
// const colaboradores = (dados1) => {
//     let converte = [dados1.nome, dados1.idade, dados1.profissao]
//         return converte  
// }
// let pessoa1 = colaboradores(individuo1)
// let pessoa2 = colaboradores(individuo2)
// console.log(pessoa1[0],pessoa1[0].length,pessoa1[1],pessoa1[2],pessoa1[2].length)
// console.log(pessoa2[0],pessoa2[0].length,pessoa2[1],pessoa2[2],pessoa2[2].length)
//R:3.a)
// const carrinho = []
// const fruta1 = {nome : "tomate", disponibilidade: true }
// const fruta2 = {nome : "cebola", disponibilidade: true }
// const fruta3 = {nome : "pimentao", disponibilidade: true }
 
// const sacola = (escolha1,escolha2,escolha3) => {
// let lista = carrinho.push(escolha1,escolha2,escolha3) 
// return lista
// }

// sacola(fruta1,fruta2,fruta3)
// console.log("Hoje tem Vinagrete", carrinho)

//DESAFIO INFINITO 
// //R: 1)
// const dadosPessoa = {}
// dadosPessoa.nome = prompt("insira um nome") 
// dadosPessoa.idade = Number(prompt("insira uma idade")) 
// dadosPessoa.profissao = prompt("insira uma profissao") 
// console.log(typeof dadosPessoa, dadosPessoa )
// //R: 2)
// const listaFilme =(prop1 , prop2)=>{
// console.log("O primeiro filme foi lançado antes do segundo?", prop1.ano > prop2.ano)
// console.log("O primeiro filme foi lançado no mesmo ano do segundo?", prop1.ano < prop2.ano)
// }
// const filme1 = { filme: "Terminator 2", ano: 1991}
// const filme2 = { filme: "SinCity 2", ano: 2014}
// listaFilme(filme1,filme2)
// // //R: 3)
// const carrinho = []
// const fruta1 = {nome : "tomate", disponibilidade: true }
// const fruta2 = {nome : "cebola", disponibilidade: true }
// const fruta3 = {nome : "pimentao", disponibilidade: true }
 
// const sacola = (escolha1,escolha2,escolha3) => {
// let lista = carrinho.push(escolha1,escolha2,escolha3) 
// return lista
// }
// const estoque = (disponivel)=>{
// disponivel.disponibilidade = false
// let alteraEstoque = disponivel
// return alteraEstoque
// }
// estoque(fruta2)
// sacola(fruta1,fruta2,fruta3)
// console.log("Hoje tem Vinagrete", carrinho)





