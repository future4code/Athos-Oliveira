//Execicio 2

type cadastroUsuario = {
   id: string,
   nome: string,
   celular: string,
   email: string,
   website: string,
 
}

type objeto = { 
   mes: string
   apoios: cadastroUsuario[]
   }

//Execicio 3
export const users: objeto[] = [
   { 
   mes:"janeiro",
   apoios:[
         {
            id: '8b4215f1',
            nome: 'Elza Linn da Quebrada',
            celular: "73999055858",
            email: 'Elza@gmail.com',
            website: 'www.naointendi.com.br'
         },
         {
            id: '8b4215f2',
            nome: 'Linn Soares',
            celular: "71999055852",
            email: 'Linn@gmail.com',
            website: 'www.Linn.com.br',
         },
      ]
      }
   
]
