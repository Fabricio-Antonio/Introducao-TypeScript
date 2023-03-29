// DIO Bank

interface IConta {
    nomeTitular: string
    saldo?: number
}

class Conta {
    private nomeTitular: string
    private saldo: number

    constructor({
        nomeTitular,
        saldo = 0
    }: IConta) {
        this.nomeTitular = nomeTitular,
        this.saldo = saldo
        console.log(`${this.nomeTitular} bem-vindo ao DIO Bank`)
    }
}

const contaA: Conta = new Conta({nomeTitular: 'Fabríco'})
const contaB: Conta = new Conta({nomeTitular: 'Pedro', saldo: 10})

console.log(contaA)
console.log(contaB)