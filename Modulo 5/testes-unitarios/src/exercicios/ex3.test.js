import { checaItensDuplicados } from "./ex3";

describe("Checa itens duplicados", () => {
    test("igual", () => {
        const resultado = checaItensDuplicados([1, 2, 3]);
    
        expect(resultado).toEqual(false);

});
test("diferente", () => {
    const resultado = checaItensDuplicados([5, 5, 3, 6, 5, 6]);

    expect(resultado).toEqual(true);

});
    });
