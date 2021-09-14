// Exemplos

// Exercício 0A
function soma() {
  // escreva seu código aqui
  const num1 = prompt('Digite o primeiro número')
  const num2 = prompt('Digite o segundo número')

  console.log(Number(num1) + Number(num2))
}

// Exercício 0B
function imprimeMensagem() {
  // escreva seu código aqui
  const mensagem = prompt('Digite sua mensagem')

  console.log(mensagem)
}

// ---------------------------------------------------
// Exercícios

// Exercício 1
function calculaAreaRetangulo() {
  // escreva seu código aqui
  let altura = Number(prompt("informe a altura: "))
  let largura = Number(prompt("agora informe a largura: "))
  let area = altura * largura
  console.log(area)
}

// Exercício 2
function imprimeIdade() {
  // escreva seu código aqui
  let anoAtual = Number(prompt("informe o ano atual: "))
  let nascimento = Number(prompt("agora informe seu ano de nascimento: "))
  let idade = anoAtual - nascimento
  console.log(idade)
}

// Exercício 3
function calculaIMC() {
  // escreva seu código aqui
  let peso = Number(prompt("informe peso: "))
  let altura = Number(prompt("agora informe a altura: "))
  let imc = peso/(altura*altura)
  console.log(imc)
}

// Exercício 4
function imprimeInformacoesUsuario() {
  // escreva seu código aqui
  let nome = prompt("Informe seu nome")
  let idade = prompt("informe a sua idade") 
  let email = prompt("agora seu email")
console.log(`Meu nome é ${nome}, tenho ${idade} anos, e o meu email é ${email}.`)
}


// Exercício 5
function imprimeTresCoresFavoritas() {
  // escreva seu código aqui
const corFavorita1 = prompt('Digite a primeira cor favorita.')
const corFavorita2 = prompt('Digite a segunda cor favorita.')
const corFavorita3 = prompt('Digite a terceira cor favorita.')

const listaDeCores = [corFavorita1, corFavorita2, corFavorita3]
console.log(listaDeCores)
  

}

// Exercício 6
function retornaStringEmMaiuscula() {
  // escreva seu código aqui
  let string = prompt("digite uma frase")
  console.log(string.toUpperCase())
}

// Exercício 7
function calculaIngressosEspetaculo() {
  // escreva seu código aqui
let custo = prompt("custo do espetaculo")
let ingresso = prompt("preco do ingresso")
console.log(custo/ingresso)
}

// Exercício 8
function checaStringsMesmoTamanho() {
  // escreva seu código aqui
  let str1 = prompt("insira uma palavra")
let str2 = prompt("insira outra palavra")
console.log(str1.length === str2.length)
}

// Exercício 9
function checaIgualdadeDesconsiderandoCase() {
  // escreva seu código aqui
  let str1 = prompt("insira uma palavra")
  let str2 = prompt("insira outra palavra")
  console.log(str1.toUpperCase() === str2.toUpperCase())
}

// Exercício 10
function checaRenovacaoRG() {
  // escreva seu código aqui
  let anoAtual =  prompt("qual ano atual")
  let nascimento = prompt("sua data de nascimento")
  let anoEmissao = prompt("ano da emissao da carteira")
  let idade = anoAtual - nascimento
  let anoRG = anoAtual - anoEmissao 
  console.log((idade <= 20 && anoRG >= 5 ) || ((idade > 20 && idade < 50) && anoRG >= 10) || (idade >= 50 && anoRG >= 15))
 }
// Exercício 11
function checaAnoBissexto() {
  // escreva seu código aqui
  let anoBissexto = prompt("informe o ano")
  console.log(anoBissexto % 4 == 0 && anoBissexto % 100 != 0 || anoBissexto % 400 == 0)
}

// Exercício 12
function checaValidadeInscricaoLabenu() {
  // escreva seu código aqui
  let idade = prompt("Você tem mais de 18 anos?")
  let ensino = prompt("Você possui ensino médio completo?")
  let horario = prompt("Você possui disponibilidade exclusiva durante os horários do curso?")
  console.log(idade ==="sim" && ensino ==="sim"&& horario ==="sim")


}
