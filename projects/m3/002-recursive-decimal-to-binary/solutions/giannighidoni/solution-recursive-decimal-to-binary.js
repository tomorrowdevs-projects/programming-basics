const num = Number(prompt("Please, enter a positive number"));

if(num < 0 || isNaN(num)){
    alert("the number is not valid");
    num = Number(prompt("Please, enter a positive number"));
} else {
    function decimalToBinary(n){
        if(n === 0){
            return 0;
        } else {
            tmp = Math.floor(n / 2);
            return String(decimalToBinary(tmp)) + String(n % 2);        
        }
    }
}

alert(decimalToBinary(num));