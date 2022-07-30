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
export class InvalidCompetiton extends CustomError{ 
  constructor(){
      super(400, 'Escolha entre as competiçoes Validas: "Lançamento de Dardo" ou "100m rasos"')
  }
}
export class InvalidEmail extends CustomError{ 
  constructor(){
      super(400, "Email ou Senha invalidos")
  }
}
export class InvalidPassword extends CustomError{ 
  constructor(){
    super(400, "Email ou Senha invalidos")
  }
}
export class UserNotFoud extends CustomError{ 
  constructor(){
    super(400, "Email ou Senha invalidos")
  }
}
export class InvalidName extends CustomError{ 
    constructor(){
      super(400, "Algum dado invalido")
    }
  }
  export class Invalidprogresso extends CustomError{ 
    constructor(){
      super(400, "informe 'Em Andamento' ou 'Concluido' ")
    }
  }
  export class InvalidTexto extends CustomError{ 
    constructor(){
      super(400, "O campo de ser ser texto")
    }
  }
  export class InvalidNumero extends CustomError{ 
    constructor(){
      super(400, "O campo de ser ser Numerico")
    }
  }
  export class Invalidunidade extends CustomError{ 
    constructor(){
      super(400, "insira um caractere representando a unidade de medida ")
    }
  }
export class InvalidDados extends CustomError{ 
  constructor(){
      super(400,  'Preencha os campos corretamente ')
  }
}