export abstract class BaseError extends Error {
    constructor(message: string, public code: number) {
      super(message);
    }
  }


  export class CustomError extends Error {
    constructor(statusCode: number, message: string){
        super(message)
    }
}
export class InvalidPet extends CustomError{ 
  constructor(){
      super(400, "A quantidade deve ser maior que zero")
  }
}
export class InvalidTime extends CustomError{ 
  constructor(){
      super(400, "'Somente permidodo duraçoes de 00:30:00 ou 01:00:00 '")
  }
}

export class InvalidDados extends CustomError{ 
  constructor(){
      super(400,  'Preencha os campos "data do agendamento","tempo de de duração, inicio e fim" , "quantidade de pets", "latitude e longitude" ')
  }
}