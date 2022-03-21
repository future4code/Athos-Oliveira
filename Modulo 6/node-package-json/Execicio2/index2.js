

// execicio 2

const operacao = (process.argv[2])
const valor1 = Number(process.argv[4])
const valor2 = Number(process.argv[3])


switch(operacao){
	case "soma":
		result = valor1 + valor2
      console.log("Resposta:",result)
		break;
	case "subt":
		result = valor1 - valor2
     console.log("Resposta:",result)
		break;
      case "subt":
		result = valor1 - valor2
      console.log("Resposta:",result)
		break;
      case "div":
		result = valor1 / valor2
      console.log("Resposta:",result)
		break;
      case "mult":
		result = valor1 * valor2
      console.log("Resposta:",result)
		break;
}
