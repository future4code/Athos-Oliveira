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
  export class Invalidnumber extends CustomError{ 
    constructor(){
      super(400, "informe um 'Valor nemerico'")
    }
  }
  export class InvalidTexto extends CustomError{ 
    constructor(){
      super(400, "O campo de ser ser texto")
    }
  }
  export class InvalidID extends CustomError{ 
    constructor(){
      super(400, "Informe uma ID valida")
    }
  }
  export class InvalidTAG extends CustomError{ 
    constructor(){
      super(400, "insira um Categoria valida")
    }
  }
export class InvalidDados extends CustomError{ 
  constructor(){
      super(400,  'Preencha os campos corretamente ')
  }
}