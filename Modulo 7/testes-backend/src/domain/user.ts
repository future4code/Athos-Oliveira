export class User {
    constructor(
        private name: string,
        private email: string,
        private password: string,
    ) {
        // validar dados passados
        this.validateName(name);
    }

    validateName(name: string){
        // lança um erro se name for inválido
    }
}