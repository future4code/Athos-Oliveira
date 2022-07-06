import { UserBusiness } from "./user";
import { 
    UserRepositoryMock,
    IdGeneratorMock,
    TokenGeneratorMock,
    HashGeneratorMock 
} from '../common/test-helpers/mocks';

describe("Testes de unidade de Signup", () => {

    const userRepositoryMock = new UserRepositoryMock();
    const idGeneratorMock = new IdGeneratorMock();
    const tokenGeneratorMock = new TokenGeneratorMock();
    const hashGeneratorMock = new HashGeneratorMock();

    const userBusiness = new UserBusiness(
        idGeneratorMock,
        hashGeneratorMock,
        userRepositoryMock,
        tokenGeneratorMock
    );

    it("Teste de implementação", async () => {
        const password = '1234457';
        await userBusiness.signup("iago", "iago@email", password);
        expect(hashGeneratorMock.hash).toHaveBeenCalledWith("12gdflgdf");
    });
    
    // Signup recebe e-mail, nome e senha e devolve um token
})