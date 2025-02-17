function decimalToBinary (int){
    return (int=== 0) ? '' : decimalToBinary(Math.floor(int/2)) + int % 2
}

console.log(decimalToBinary(436));
