// DIO Bank

/* É possível ralizar:
criação de conta;
depósitos;
saques;
cancelamento de conta.
 */

interface IConta {
    nomeTitular: string
    saldo?: number
}

class Conta {
    private nomeTitular: string
    private saldo: number
    private ativa: boolean = true

    constructor({
        nomeTitular,
        saldo = 0
    }: IConta) {
        this.nomeTitular = nomeTitular,
        this.saldo = saldo
        console.log(`${this.nomeTitular} bem-vindo ao DIO Bank`)
    }

    meuSaldo = (): number => this.saldo

    depositar = (valor: number):  void | boolean => {
        if(!this.ativa){
            console.log('Conta desativada, impossível ralizar depósito!')
            return this.ativa
        }
        this.saldo += valor
        console.log(`você depositou ${valor}. Seu novo saldo é ${this.saldo}`)
    }

    sacar = (valor: number): boolean => {
        if(!this.ativa){
          console.log('Conta desativa, impossível realizar saque')
          return this.ativa
        }

        if(valor <= this.saldo){
            this.saldo -= valor
            console.log(`Você sacou ${valor}. Seu novo saldo é ${this.saldo}`)
            return this.ativa
          }

        console.log(`Seu saldo atual é insuficiente. Seu saldo atual é de ${this.saldo}`)
        return this.ativa
    }

    cancelarConta = () => {
        if (this.saldo === 0){
        this.ativa = false
        console.log('Conta desativada')
        return this.ativa
        }

        console.log(`Impossível desativar conta, a conta de ${this.nomeTitular}. Conta com pendência!`)
    }
}

const conta: Conta = new Conta({nomeTitular: 'Fabrício'})