export class Pessoa {
    constructor(private _nome: string, private _idade: number) {}

    public get nome(): string {
        return this._nome;
    }

    public get idade(): number {
        return this._idade;
    }

    public get resumo(): string {
        return `Meu nome é ${this.nome} e tenho ${this.idade} anos de idade`;
    }
}