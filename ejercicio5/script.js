function boton(){
    var num = 5, x = 0, y = num

    for(let n=(num-1); n>0; n--){
        x = y * n
        y = x
    }
    console.log(y)
}