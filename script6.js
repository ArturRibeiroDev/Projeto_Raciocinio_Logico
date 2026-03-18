let nome = prompt("Qual o nome do passageiro? ")
let categoria = parseInt(prompt("Qual a categoria do passageiro? \n 1 - Adulto \n 2 - Estudante \n 3 - Idoso \n 4 - Criança menor de 5 anos \nValor: "))
let destino = parseInt(prompt("Qual o destino escolhido? \n 1 - Destino A: R$ 45,00 \n 2 - Destino B: R$ 72,00 \n 3 - Destino C: R$ 110,00 \n 4 - Destino D: R$ 138,00 \nValor: "))
let quantidade = parseInt(prompt("Qual a quantidade de passageiros? "))

let status

let destino_escolhido

let tipo_passageiro

let desconto
let valor_destino

switch(categoria) {
    case 1:
        tipo_passageiro = "---- ADULTO ----"
        desconto = 0
        break;
    case 2:
        tipo_passageiro = "---- ESTUDANTE ----"
        desconto = 50
        break;
    case 3:
        tipo_passageiro = "---- IDOSO ----"
        desconto = 50
        break;
    case 4: 
        tipo_passageiro = "---- Criança menor de 5 anos ----"
        desconto = 100
        break;
        
    default:
            console.log("Categoria inválida.")
            return
}

switch(destino) {
  case 1:
        destino_escolhido = "A: R$ 45,00"
        valor_destino = 45
    break;
  case 2: 
        destino_escolhido = "B: R$ 72,00"
        valor_destino = 72
    break;
  case 3:
        destino_escolhido = "C: R$ 110,00"
        valor_destino = 110
        break;
    case 4: 
        destino_escolhido = "D: R$ 138,00"
        valor_destino = 138
        break;
        
  default: 
    console.log("Destino inválido.")
    return
}

let subtotal = valor_destino * quantidade 
let valor_desconto = subtotal * (desconto / 100)
let valor_total = subtotal - valor_desconto

switch (true) {
    case valor_total === 0:
        status = "Embarque gratuito ilberado."
        break;
        
    case valor_total < 100:
        status = "Dirija-se ao guichê para pagamento."
        break;
        
    case valor_total < 200:
        status = "Pagamento via terminal disponível."
        break;
        
    case valor_total >= 200:
        status = "Atendimento prioritário no guichê VIP."
        break;
}

let forma_de_pagamento = valor_total === 0 ? "Nenhum" : valor_total < 100 ? "PAGAMENTO Á VISTA" : "PARCELÁVEL EM ATÉ 3X SEM JUROS" 

console.log(`\n${tipo_passageiro}`)
console.log(`\n--- RESULTADO ---`)
console.log(`Cliente: ${nome}`)
console.log(`Destino: ${destino_escolhido}`)
console.log(`Quantidade de passageiros: ${quantidade} passageiros`)
console.log(`Valor do desconto: ${desconto}%`)
console.log(`Valor a pagar: R$ ${valor_total.toFixed(2)}`)
console.log(`Forma de pagamento: ${forma_de_pagamento}`)
console.log(`Orientações do embarque: ${status}`)