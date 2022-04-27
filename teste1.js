function maiorMenor(A,B,C){
    if(A > B && A > C) {
        console.log(`${A} é maior`)
    }
    if(B > A && B > C) {
        console.log(`${B} é maior`)
    }
    if(C > A && C > B) {
        console.log(`${C} é maior`)
    }
    if(A < B && A < C) {
        console.log(`${A} é menor`)
    }
    if(B < A && B < C) {
        console.log(`${B} é menor`)
    }
    if(C < A && C < B) {
        console.log(`${C} é menor`)
    }

}
maiorMenor(30,70,1)