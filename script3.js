let nome = prompt("Qual o nome do motorista? ")
let tipo = parseInt(prompt("Tipo de combustível:\n1 - Gasolina\n2 - Etanol\n3 - Diesel \nValor: "))

let consumo_medio

switch(tipo) {
    case 1:
        console.log("---- GASOLINA ----")
        consumo_medio = 12
        break;
    case 2:
        console.log("---- ETANOL ----")
        consumo_medio = 8.5
        break;
    case 3:
        console.log("---- DIESEL ----")
        consumo_medio = 15
        break;
    default:
            console.log("Combustível inválido.")
            return
}

let distancia = parseFloat(prompt("Distância percorrida (km): "))
let litros = parseFloat(prompt("Litros abastecidos: "))

let consumo_real = distancia / litros

let avaliacao

switch (true) {
    case consumo_real >= consumo_medio * 1.1:
        avaliacao = "Excelente --- acima do esperado"
        break;
    case consumo_real >= consumo_medio * 0.9:
        avaliacao = "Regular --- dentro do esperado"
        break;
    case consumo_real >= consumo_medio * 0.7:
        avaliacao = "Ruim --- abaixo do esperado"
        break;
        default:
            avaliacao = "Crítico --- veículo requer manutenção"
}

let status = consumo_real >= (consumo_medio * 0.9) ? 
        "LIBERADO PARA FROTA" : "ENCAMINHADO PARA REVISÃO"
        
console.log(`Motorista: ${nome}`)
console.log(`Consumo esperado: ${consumo_medio.toFixed(2)} Km/L`)
console.log(`Consumo real: ${consumo_real.toFixed(2)} Km/L`)
console.log(avaliacao)
console.log(`Status: ${status}`)
        
    