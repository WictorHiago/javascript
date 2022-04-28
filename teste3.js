let itens = [100,87,60,40,203,111,92,32,47,203]
let media = 0

let maior = Math.max(...itens)//aqui pegamos o maior valor
let menor = Math.min(...itens)//aqui pegamos o menor valor

let menorPosition = (itens.indexOf(menor))//aqui pegamos a 'posicao do menor' valor

for (let i = 0; i < itens.length; i++) {//aqui percorremos o array

    media += itens[i];//aqui somaos media e valor do array
    resultadoMedia = media / 10 //aqui dividimos a media por 10
} 
console.log(`O maior numero é ${maior} | O menor numero é ${menor} na posição ${menorPosition}!
e a média deles é ${media}.`)
