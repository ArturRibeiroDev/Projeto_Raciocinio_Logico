let nome = prompt("Qual o nome do motorista? ")
let tipo = parseInt(prompt("Qual o tipo do combustível utilizado? \n  (1 - Gasolina, 2 - Etanol, 3 - Diesel) \n Valor: "))
let distancia 
let litros 
let consumo_medio
let consumo_real


switch(tipo) {
    case 1:
        console.log("---- GASOLINA ----")
        consumo_medio = 12
        distancia = prompt("Qual a distância percoridda em km? ")
        litros = prompt("Quantos litros abastecidos? ")
        consumo_real = distancia / litros
        consumo_real.toFixed(2)
        switch(true) {
            case (consumo_real >= (consumo_medio * 1.1)):
                console.log(`Consumo esperado: ${consumo_medio}Km/L`)
                console.log(`Consumo real? ${consumo_real}Km/L`)
                console.log("Excelente --- acima do esperado")
                break;
            case (consumo_real >= (consumo_medio * 0.9)):
                console.log(`Consumo esperado: ${consumo_medio}Km/L`)
                console.log(`Consumo real? ${consumo_real}Km/L`)
                console.log("Regular --- dentro do esperado")
                break;
            case (consumo_real >= (consumo_medio * 0.7)):
                console.log(`Consumo esperado: ${consumo_medio}Km/L`)
                console.log(`Consumo real? ${consumo_real}Km/L`)
                console.log("Ruim --- abaixo do esperado")
                break;
                default:
            console.log("Crítico --- veículo requer manutenção")
        }
        break;
    case 2:
        console.log("---- ETANOL ----")
        consumo_medio = 8.5
        distancia = prompt("Qual a distância percoridda em km? ")
        litros = prompt("Quantos litros abastecidos? ")
        consumo_real = distancia / litros
        switch(true) {
            case (consumo_real >= (consumo_medio * 1.1)):
                console.log(`Consumo esperado: ${consumo_medio}Km/L`)
                console.log(`Consumo real? ${consumo_real}Km/L`)
                console.log("Excelente --- acima do esperado")
                break;
            case (consumo_real >= (consumo_medio * 0.9)):
                console.log(`Consumo esperado: ${consumo_medio}Km/L`)
                console.log(`Consumo real? ${consumo_real}Km/L`)
                console.log("Regular --- dentro do esperado")
                break;
            case (consumo_real >= (consumo_medio * 0.7)):
                console.log(`Consumo esperado: ${consumo_medio}Km/L`)
                console.log(`Consumo real? ${consumo_real}Km/L`)
                console.log("Ruim --- abaixo do esperado")
                break;
                default:
            console.log("Crítico --- veículo requer manutenção")
        }
        break;
    case 3:
        console.log("---- DIESEL ----")
        consumo_medio = 15
        distancia = prompt("Qual a distância percoridda em km? ")
        litros = prompt("Quantos litros abastecidos? ")
        consumo_real = distancia / litros
        switch(true) {
            case (consumo_real >= (consumo_medio * 1.1)):
                console.log(`Consumo esperado: ${consumo_medio}Km/L`)
                console.log(`Consumo real? ${consumo_real}Km/L`)
                console.log("Excelente --- acima do esperado")
                break;
            case (consumo_real >= (consumo_medio * 0.9)):
                console.log(`Consumo esperado: ${consumo_medio}Km/L`)
                console.log(`Consumo real? ${consumo_real}Km/L`)
                console.log("Regular --- dentro do esperado")
                break;
            case (consumo_real >= (consumo_medio * 0.7)):
                console.log(`Consumo esperado: ${consumo_medio}Km/L`)
                console.log(`Consumo real? ${consumo_real}Km/L`)
                console.log("Ruim --- abaixo do esperado")
                break;
                default:
            console.log("Crítico --- veículo requer manutenção")
        }
        break;
        default:
            console.log("Combustível inválido.")
}

let status = (consumo_real >= (consumo_medio * 1.1) || consumo_real >= (consumo_medio * 0.9)) ? "LIBERADO PARA FROTA" : "ENCAMINHADO PARA REVISÃO"
        console.log(`${nome}, o seu veículo está ${status}`)