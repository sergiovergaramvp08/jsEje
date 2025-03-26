function boton(){
    var letras = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E', 'T'];
    var dni = 95668806, letra = "F"

    if(dni > 99999999 || dni < 0)
        console.log("el número proporcionado no es válido")
    else
        letras = letras[dni%23]
        if(letra == letras)
            console.log("El dni proporcionado corresponde correctamente a la letra "+letras)
        if(letra !== letras)
            console.log("la letra correspondiente al dni proporcionado no coincide con la letra proporcionada")
}