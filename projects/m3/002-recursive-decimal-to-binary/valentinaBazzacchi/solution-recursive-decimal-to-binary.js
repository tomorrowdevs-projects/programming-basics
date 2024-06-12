let int = prompt("Enter a positive integer");
let binary = "";
if (int < 0) {
    alert("Error! This is a negative integer")
} else {
    alert(decimalToBinary(int));
}

function decimalToBinary(int) {
    // Base Case
    if (int == 0) {
        return binary += 0;
    
    } else if (int == 1) {
        return binary += 1;
    // Recursive Case
    } else if (int > 1) {
        decimalToBinary(Math.floor(int / 2));
    }
    
    return binary += int % 2;
}