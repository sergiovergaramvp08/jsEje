function boton(){
    var num = parseInt(prompt("COLOCA UN NUMERO"))
    var x, y = num

    for(let n=(num-1); n>0; n--){
        x = y * n
        y = x
    }
    console.log(y)
}
