function boton(){
    let text = "TEXTto"

    if(text == text.toLowerCase())
        console.log("El texto esta en minusculas")
    if(text == text.toUpperCase())
        console.log("El texto esta en mayusculas")
    if(text !== text.toUpperCase() && text !== text.toLowerCase())
        console.log("El texto esta formado por mayusculas y minusculas")
}