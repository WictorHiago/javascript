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
            //se não for...
            meio = C
            menor = B
        }
    }else if (A < B && A < C) {
            menor = A
            //verificar entre B e C
        if(B > C) {
            maior = B
            menor = C
        }else{
            //se não for...
            maior = C
            menor = B
        }
    }else{
        meio = A
        //verificar entre B e C
        if(B > C) {
            maior = B
            menor = C
        }else{
            //se não for...
            maior = C
            menor = B
        }
    }

    console.log('menor', menor)
    console.log('meio', meio)
    console.log('maior', maior)

}
console.log(menorMeioMaior(30,40,20))
