//Exercícios de interpretação de código
//1 R: imprime o indicie e cada objeto respectivo por que esta com 3 parametros, 1 variavel passou em cada parametro
//2 R: imprime somente os nomes de cada objeto do array 
//3 R:imprime os nomes e apenlidos do objeto exeto Leticia Chico

//Exercícios de escrita de código
//1 R:
// const pets = [
//     { nome: "Lupin", raca: "Salsicha"},
//     { nome: "Polly", raca: "Lhasa Apso"},
//     { nome: "Madame", raca: "Poodle"},
//     { nome: "Quentinho", raca: "Salsicha"},
//     { nome: "Fluffy", raca: "Poodle"},
//     { nome: "Caramelo", raca: "Vira-lata"},
//  ]

// //a)
// const nomePet = (iten) =>{
//     return iten.nome
// }
// let resultado = pets.map(nomePet)
// console.log(resultado)

// //b)
// const racaPet = (iten) =>{
// return iten.raca === "Salsicha"
// }
// let racas = pets.filter(racaPet)
// console.log(racas)

// //c)
// const Desconto =(iten1,iten2) =>{
//         return iten1.raca === "Poodle"      
// }
// const Clientes = (iten1) => {
//     return iten1.nome 
// }
// let filtraPoodles = pets.filter(Desconto)  //chama função Desconto para filtrar
// let clientePoodles = filtraPoodles.map(Clientes) // chamafunção Clients para mapear
// for(let i = 0; i < clientePoodles.length ; i++){ 
// let mensagem = "Você ganhou um cupom de desconto de 10% para tosar o/a " + clientePoodles[i] + " ! "
// console.log(mensagem) // for para caminhar entre os elementos do array usando indice 
// }

//2 R:
// const produtos = [
//     { nome: "Alface Lavada", categoria: "Hortifruti", preco: 2.5 },
//     { nome: "Guaraná 2l", categoria: "Bebidas", preco: 7.8 },
//     { nome: "Veja Multiuso", categoria: "Limpeza", preco: 12.6 },
//     { nome: "Dúzia de Banana", categoria: "Hortifruti", preco: 5.7 },
//     { nome: "Leite", categoria: "Bebidas", preco: 2.99 },
//     { nome: "Cândida", categoria: "Limpeza", preco: 3.30 },
//     { nome: "Detergente Ypê", categoria: "Limpeza", preco: 2.2 },
//     { nome: "Vinho Tinto", categoria: "Bebidas", preco: 55 },
//     { nome: "Berinjela kg", categoria: "Hortifruti", preco: 8.99 },
//     { nome: "Sabão em Pó Ypê", categoria: "Limpeza", preco: 10.80 }
//  ]
//a)
// const nomeProduto = (parametro) => {
//     return parametro.nome
// }
// let soNomes = produtos.map(nomeProduto)
// console.log(soNomes)

//b) Crie um novo array que contenha um objeto com o nome e o preço de cada item, aplicando 5% de desconto em todos eles
// const promocaoNome=(par1,par2,par3)=>{
//     let nome = par1.nome
//     let precoPromocional = par1.preco - par1.preco *0.05
//     return {nome,precoPromocional}
// }
// let soNomes =produtos.map(promocaoNome)
// console.log(soNomes)

//c)Crie um novo array que contenha apenas os objetos da categoria Bebidas
// const categoriaBebidas = (iten1)=>{
//     return iten1.categoria === "Bebidas"
// }
// const produtosBebidas =(iten1)=>{
//         return iten1.nome
// }
// let Filtro = produtos.filter(categoriaBebidas)
// let Seleção = Filtro.map(produtosBebidas)
// console.log(Seleção)

//d) Crie um novo array que contenha apenas os objetos cujo nome contenha a palavra "Ypê"
// const selecaoYpe = (parametro)=>{  
//     return parametro.nome   //esse filtra
//     }
//     const selecaoYpe2 = (parametro)=>{
//         return parametro.includes('Ypê') // busca somente ypê no array
//         }
// let filtrarNomes = produtos.map(selecaoYpe)
// let produtosYpe = filtrarNomes.filter(selecaoYpe2)
// //console.log(filtrarNomes)  
// console.log(produtosYpe)

//e) Crie um novo array onde cada item é uma frase "Compre [NOME] por [PREÇO]". Esse array deve conter frases apenas dos itens cujo nome contenha a palavra "Ypê"
// const selecaoYpe = (parametro)=>{  
//     let nomeMensagen = parametro.nome
//     let precoMensagen = parametro.preco
//     return  `Compre ${nomeMensagen} por ${precoMensagen}`   //esse filtra
//     }
//     const selecaoYpe2 = (parametro)=>{
//         return parametro.includes('Ypê') // busca somente ypê no array
//         }
// let filtrarNomes = produtos.map(selecaoYpe)
// let produtosYpe = filtrarNomes.filter(selecaoYpe2)
 
// console.log(produtosYpe)
