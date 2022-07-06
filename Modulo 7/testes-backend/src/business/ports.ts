// Nome "ports" vem do padrão chamado ports and adapters
// padrão que inspirou o Clean Architecture

export interface IIdGenerator {
    generate: () => string;
}

export interface IHashGenerator {
    hash: (plainText: string) => Promise<string>;
}

export interface ITokenGenerator {
    generate: (args: any) => string;
}

// data transfer object -> objeto que representa o que existe no bd
export interface UserDTO {
    id: string;
    name: string;
    email: string;
    hashedPassword: string;
}

export interface IUserRepository {
    createUser: (user: UserDTO) => Promise<boolean>;
}