import { User } from "../domain/user";
import { 
    IHashGenerator, 
    IIdGenerator, 
    UserDTO, 
    IUserRepository,
    ITokenGenerator 
} from "./ports";

export class UserBusiness {
    constructor(
        private idGenerator: IIdGenerator,
        private hashGenerator: IHashGenerator,
        private userRepository: IUserRepository,
        private tokenGenerator: ITokenGenerator
    ) {}

    async signup(name: string, email: string, password: string) {
        // só pra validar os dados
        new User(name, email, password);

        const hashedPassword =  await this.hashGenerator.hash(password);

        const user: UserDTO = {
            id: this.idGenerator.generate(),
            name,
            email,
            hashedPassword
        }

        await this.userRepository.createUser(user);

        return this.tokenGenerator.generate({
            id: user.id,
            name: user.name
        });
    }


    async login(email: string, password: string) {

    }
}