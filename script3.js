let idade = parseInt(prompt('Qual a idade do usuário? '))
let tempo_contribuição = parseInt(prompt('Qual o tempo de contribuição do usuário? '))

if (idade >= 60) {
    if(idade >= 65 || tempo_contribuição >= 30) {
        console.log('O usuário está apto para se aposentar')
    }
    else {
        console.log('O usuário não está apto para se aposentar')
    }
}

else {
    console.log('O usuário tem menos de 60 anos')
}

