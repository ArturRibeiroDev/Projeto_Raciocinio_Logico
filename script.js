let nome_do_motorista = prompt('Qual o nome do motorista? ')
let velocidade_max = parseInt(prompt('Qual a velocidade máxima permitida na via? '))
let velocidade_veiculo = parseFloat(prompt('Qual a velocidade registrada do veículo? '))

let excesso_velocidade = velocidade_veiculo - velocidade_max 

if (velocidade_veiculo <= velocidade_max) {
    console.log(`Velocidade Registrada: ${velocidade_veiculo}km/h`)
    console.log(`O motorista ${nome_do_motorista} está dentro do limite de velocidade. Nenhuma multa aplicada.`)
}

else if (excesso_velocidade <= 10) {
    console.log(`Velocidade Registrada: ${velocidade_veiculo}km/h`)
    console.log(`O motorista ${nome_do_motorista} estava ${excesso_velocidade}km/h acima do limite de velocidade de ${velocidade_max}km/h e será aplicado uma multa leve no valor de: R$50`)
}

else if (excesso_velocidade > 10 && excesso_velocidade <= 20 ) {
    console.log(`Velocidade Registrada: ${velocidade_veiculo}km/h`)
    console.log(`O motorista ${nome_do_motorista} estava ${excesso_velocidade}km/h acima do limite de velocidade de ${velocidade_max}km/h e será aplicado uma multa média no valor de: R$100`)
}

else {
    console.log(`Velocidade Registrada: ${velocidade_veiculo}km/h`)
    console.log(`O motorista ${nome_do_motorista} estava ${excesso_velocidade}km/h acima do limite de velocidade de ${velocidade_max}km/h e será aplicado uma multa grave no valor de: R$200`)
}

