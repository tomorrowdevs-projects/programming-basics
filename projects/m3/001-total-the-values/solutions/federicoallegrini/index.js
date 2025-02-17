
function recursiveRead(sum = "0.0"){
    const value = prompt('Insert numeric value:');
    return value ? recursiveRead(String(parseFloat(sum) + parseFloat(value))) : sum;
}

alert(recursiveRead());
