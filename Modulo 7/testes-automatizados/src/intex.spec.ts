import {isEven} from '.';

describe("teste da funcao is evem",()=>{

    test("Retorna true para 8", () => {
        const result = isEven(8);
        expect(result).toEqual(true);
    });

    test("Retorna false para 7", () => {
        const result = isEven(7);
        expect(result).toBe(false);

    });
})