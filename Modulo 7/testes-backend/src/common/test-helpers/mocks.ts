import { IUserRepository, IIdGenerator, ITokenGenerator, IHashGenerator } from "../../business/ports";

export class UserRepositoryMock implements IUserRepository {
    createUser = jest.fn()
}

export class IdGeneratorMock implements IIdGenerator {
    generate = jest.fn()
}

export class TokenGeneratorMock implements ITokenGenerator {
    generate = jest.fn()
}

export class HashGeneratorMock implements IHashGenerator {
    hash = jest.fn()
}