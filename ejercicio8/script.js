function boton() {
    let text = 'La ruta nos aporto otro paso natural';
    
    let arr = text.replaceAll(' ', '').split('');

    let i = 0;           
    let j = arr.length - 1; 
    let isPalindrome = true;  

    while (i < j) {
        if (arr[i] !== arr[j]) {
            isPalindrome = false;  
            break;  
        }
        i++;
        j--;
    }

    
    if (isPalindrome) {
        console.log("Es un palíndromo");
    } else {
        console.log("No es un palíndromo");
    }
}
