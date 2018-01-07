import { Pessoa } from "../src/pessoa";

describe('Pessoa', () => {

    let pessoa: Pessoa;
    const NOME = 'Marcos';
    const IDADE = 34;

    beforeEach(() => {
        pessoa = new Pessoa(NOME, IDADE);
    })

    it('Deve conseguir instanciar', () => {
        expect(pessoa).toBeDefined();
    })

    it('Os parametros recebido do construtor devem ser mesmo nas propriedades GET', () => {
        expect(pessoa.nome).toBe(NOME);
        expect(pessoa.idade).toBe(IDADE);
    })
})