
type cliente = {
		userId: string,
		CPF: string,
		nome: string,
		nascimento: string,
		saldo: number,
		extrato:transacoes[]
}
type transacoes = {
	data: string,
	descricao: string,
	debido: number,
}

export const clientes: cliente[] = [
	{
		userId: "1",
		CPF: "013.117.115-57",
		nome: "Mr. Astrobot",
		nascimento: "20/07/1987",
		saldo: 100,
		extrato: [
			{
				data: "22/01/2022",
				descricao: "alimentacao",
				debido: 50,
			},
			{
				data: "23/02/2022",
				descricao: "aluguel",
				debido: 50,
			}
		]
	},
	{
		userId: "2",
		CPF: "011.117.115-57",
		nome: "Mr. AstroMath",
		nascimento: "10/07/1987",
		saldo: 150,
		extrato: [
			{
				data: "10/01/2022",
				descricao: "combustivel",
				debido: 150,
			},
			{
				data: "12/02/2022",
				descricao: "lazer",
				debido: 50,
			}
		]
	},
]