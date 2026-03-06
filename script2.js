let nome_do_aluno = prompt('Qual o nome do aluno? ')
let nota_prova_1= parseInt(prompt('Qual a nota da AV1? '))
let nota_prova_2 = parseInt(prompt('Qual a nota da AV2? '))



let nota_parcial_aluno = (nota_prova_1 + nota_prova_2) / 2


if (nota_parcial_aluno >= 4) {
    let nota_prova_3 = parseInt(prompt('Qual a nota da AV3? '))
    let nota_final = (nota_parcial_aluno + nota_prova_3) / 2
    let percentual_frequencia = parseInt(prompt('Qual o percentual de frequencia do aluno? '))
    if (percentual_frequencia < 75 && nota_final >= 5){
        console.log('Você foi reprovado por falta...')
    }
    else if(nota_final >= 5 && percentual_frequencia >= 75) {
        console.log(`Parabéns ${nome_do_aluno}!!! Você conseguiu uma Nota Final de ${nota_final} e foi aprovado!!!`)
    }
    else {
        console.log(`A nota final deve ser superior ou igual a 5, porém
        Você conseguiu uma nota final de ${nota_final} e foi reprovado`)
    }
}

else {
    console.log('Reprovado na Nota Parcial')
}