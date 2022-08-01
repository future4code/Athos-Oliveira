"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InvalidDados = exports.Invalidunidade = exports.InvalidNumero = exports.InvalidTexto = exports.Invalidprogresso = exports.InvalidName = exports.UserNotFoud = exports.InvalidPassword = exports.InvalidEmail = exports.InvalidCompetiton = exports.InvalidPet = exports.CustomError = exports.BaseError = void 0;
class BaseError extends Error {
    constructor(message, code) {
        super(message);
        this.code = code;
    }
}
exports.BaseError = BaseError;
class CustomError extends Error {
    constructor(statusCode, message) {
        super(message);
    }
}
exports.CustomError = CustomError;
class InvalidPet extends CustomError {
    constructor() {
        super(400, "A quantidade deve ser maior que zero");
    }
}
exports.InvalidPet = InvalidPet;
class InvalidCompetiton extends CustomError {
    constructor() {
        super(400, 'Escolha entre as competiçoes Validas: "Lançamento de Dardo" ou "100m rasos"');
    }
}
exports.InvalidCompetiton = InvalidCompetiton;
class InvalidEmail extends CustomError {
    constructor() {
        super(400, "Email ou Senha invalidos");
    }
}
exports.InvalidEmail = InvalidEmail;
class InvalidPassword extends CustomError {
    constructor() {
        super(400, "Email ou Senha invalidos");
    }
}
exports.InvalidPassword = InvalidPassword;
class UserNotFoud extends CustomError {
    constructor() {
        super(400, "Email ou Senha invalidos");
    }
}
exports.UserNotFoud = UserNotFoud;
class InvalidName extends CustomError {
    constructor() {
        super(400, "Algum dado invalido");
    }
}
exports.InvalidName = InvalidName;
class Invalidprogresso extends CustomError {
    constructor() {
        super(400, "informe 'Em Andamento' ou 'Concluido' ");
    }
}
exports.Invalidprogresso = Invalidprogresso;
class InvalidTexto extends CustomError {
    constructor() {
        super(400, "O campo de ser ser texto");
    }
}
exports.InvalidTexto = InvalidTexto;
class InvalidNumero extends CustomError {
    constructor() {
        super(400, "O campo de ser ser Numerico");
    }
}
exports.InvalidNumero = InvalidNumero;
class Invalidunidade extends CustomError {
    constructor() {
        super(400, "insira um caractere representando a unidade de medida ");
    }
}
exports.Invalidunidade = Invalidunidade;
class InvalidDados extends CustomError {
    constructor() {
        super(400, 'Preencha os campos corretamente ');
    }
}
exports.InvalidDados = InvalidDados;
//# sourceMappingURL=customError.js.map