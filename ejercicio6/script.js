function boton(){
    var num = 6, n = 0

    while(n<num){
        n = n+2
        console.log(n)
        if(num == n)
            console.log("El numero es par")
    }
    if(n > num)
        console.log("El numero es impar")
}