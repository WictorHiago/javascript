function menorMeioMaior(A,B,C) {

    let maior;
    let menor;
    let meio;

    if(A > B && A > C) {
        maior = A
        //verificar entre B e C
        if(B > C) {
            meio = B
            menor = C
        }else{
            meio = C
            menor = B
        }
    }else if
        (A < B && A < C) {
            menor = A
    }else{
        meio = A
    }

    console.log('menor', menor)
    console.log('meio', meio)
    console.log('maior', maior)

}
console.log(menorMeioMaior(500,100,900))
