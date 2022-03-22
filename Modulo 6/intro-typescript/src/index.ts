// import * as readline from 'readline';
// const idade: number = 15;
// let nome: string = "Paula";
// // let password: borlean = true;


// console.log(`nome: ${nome}, idade: ${idade}`);

// // const functionsValor:(Valor1: string) => Number(){
// //     return 8
// // }

// function buscacarro(frota:{marca:string}[], marca:string) {
//     // if(marca === undefined){
//     //     return frota
//     // }
//     if(!marca) return frota
//     return frota.filter(carro => carro.marca == marca)
// }

//EXECICIO 1 
 
// function checaTriangulo(a:number,b:number,c:number){
// if(a !== b&& b!==c){
//     return "Escaleno"
// } else if (a === b && b ===c){
//     return "Equilatero"
// } else {
//     return "Isosceles"
// }
// }

// console.log (checaTriangulo(1,4,2))

//Execicio 2
 

function imprimeTresCoresFavoritas(cor01?:string, cor02?:string,cor03?:string   ):void {
    let cor1:any  =  cor01
    let cor2:any   = cor02
    let cor3:any  = cor03
    console.log( [cor1, cor2, cor3] )
}
console.log( imprimeTresCoresFavoritas("red","green","Blue") )


//Execicio 3

//   function checaAnoBissexto(ano:number) {
//     const cond1 = ano % 400 === 0
//     const cond2 = (ano % 4 === 0) && (ano % 100 !== 0)
//     return cond1 || cond2
//  }
//  console.log (checaAnoBissexto(1996))

//execicio 4

// function comparaDoisNumeros(num1:number, num2:number) {
//     let maiorNumero:number;
//     let menorNumero:number;
  
//     if (num1 > num2) {
//       maiorNumero = num1;
//       menorNumero = num2;
//     } else {
//       maiorNumero = num2;
//       menorNumero = num1;
//     }
  
//     const diferenca:number = maiorNumero - menorNumero;
  
//     return diferenca 
//   }
//   console.log(comparaDoisNumeros(25,50))

//execico 5


// function checaRenovacaoRG(par1?:number, par2?:number, par3?:number) {
//     const anoAtual:any = par1
//     const anoNascimento:any = par2
//     const anoEmissao:any = par3
 
//     const idade = anoAtual - anoNascimento
//     const tempoCarteira = anoAtual - anoEmissao
 
//     const cond1:boolean = idade <= 20 && tempoCarteira >= 5
//     const cond2:boolean = idade > 20 && idade <= 50 && tempoCarteira >= 10
//     const cond3:boolean = idade > 50 && tempoCarteira >= 15
 
//     return (cond1 || cond2 || cond3)
//  }
//  console.log(checaRenovacaoRG(2022,1987,2012))