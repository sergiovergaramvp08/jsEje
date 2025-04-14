function boton() {
    let text = 'la ruta nos aporto otro paso natural'
    let arr = text.replaceAll(' ', '').split('')
    let aciertos = 0, i=0, l = arr.length-1

    while(i<arr.length-1){
        if(arr[i] == arr[l]){
            aciertos++
        }
        i++
        l--
    }

    if(aciertos == arr.length-1){
        console.log("es palindromo")
    }
    else{
        console.log("no es palindromo")
    }
}
