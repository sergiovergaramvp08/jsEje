function boton() {
    var numStr = prompt("NUMERO:");
    var num = parseInt(numStr);
    var x = 0;
    var y = num;
  
    
    if (num === 0) {
      console.log("El factorial de 0 es: 1");
      return;
    }
  
    for (let n = (num - 1); n > 0; n--) {
      x = y * n;
      y = x;
    }
    console.log(y);
  }
