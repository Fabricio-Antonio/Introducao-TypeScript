interface IcalcularIdade {
    nome: string
    anoNascimento: number
}

function calcularIdade({
    nome,
    anoNascimento
}: IcalcularIdade): string {
    const idade: number = 2023 - anoNascimento
    return `Seu nome é ${nome}, e você tem ${idade} anos de idade`
}

console.log(calcularIdade({nome: 'Fabrício', anoNascimento: 2003}))