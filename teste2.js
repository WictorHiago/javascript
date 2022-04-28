function menorMeioMaior(A,B,C) {
    
    let menor,meio,maior

    if(A > B && A > C) {
        maior = A
        //entre B e C
        if(B < C) {//sobrou meio e menor
            menor = B
            meio = C
        }else{//caso contrario
            menor = C
            meio = B
        }
    }else if (A < B && A <C) {
        menor = A
        //entre B e C
        if(B > C) {//sobrou maior e menor
            maior = B
            meio = C
        }else{//caso contrario
            maior = C
            meio = B
        }
    }else{
        meio = A
        //entre B e C
        if(B > C) {
            maior = B
            menor = C
        }else{
            maior = C
            menor = B
        }
    }
    console.log(`maior ${maior} meio ${meio} menor ${menor} `)
}
    
    console.log(menorMeioMaior(30,60,20))