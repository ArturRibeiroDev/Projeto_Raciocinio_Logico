let nome = prompt("Qual o nome do correntista? ")
let tipo = parseInt(prompt("Qual o tipo de conta? \n 1 - Conta Corrente \n 2 - Conta Poupança \n 3 - Conta Salário \nValor: "))
let operacao = parseInt(prompt("Qual o tipo de operação desejada? \n 1- Saque \n 2 - Depósito \n 3 - Consultar Saldo \nValor: "))

let saldo = parseFloat(prompt("Qual o saldo atual da conta? "))


let limite_saque
let saque = 0
let deposito = 0
let status

switch(tipo) {
    case 1:
        console.log("---- CONTA CORRENTE ----")
        limite_saque = 3000
        break;
    case 2:
        console.log("---- CONTA POUPANÇA ----")
        limite_saque = 1500
        break;
    case 3:
        console.log("---- CONTA SALÁRIO ----")
        limite_saque = 2000
        break;
    default:
            console.log("Tipo de conta inválido.")
            return
}

switch(operacao) {
  case 1:
        saque = parseFloat(prompt("Qual o valor do saque? "))
    break;
  case 2: 
        deposito = parseFloat(prompt("Qual o valor do depósito? "))
    break;
  case 3:
        console.log(`O seu saldo atual é: R$ ${saldo.toFixed(2)}`)
        break;
  default: 
    console.log("Operação Inexistente")
    return
}

switch (true) {
    case operacao === 1 && saque > limite_saque:
        status = "Saque negado --- valor acima do limite diário."
        break;
        
    case operacao === 1 && saque > saldo:
        status = "Saque negado --- saldo insuficiente."
        break;
        
    case operacao === 1:
        saldo -= saque
        status = "Saque realizado com sucesso."
        break;
        
    case operacao === 2:
        saldo += deposito
        status = "Depósito realizado com sucesso."
        break;
    case operacao === 3:
        status = "Apenas verificação de saldo"
        break;
}

let situacao = saldo > 0 ? "Saldo positivo" : "Saldo zerado/negativo"

console.log(`\n--- RESULTADO ---`)
console.log(`Cliente: ${nome}`)
console.log(`Saldo final: R$ ${saldo.toFixed(2)}`)
console.log(`Status: ${status}`)
console.log(`Situação: ${situacao}`)