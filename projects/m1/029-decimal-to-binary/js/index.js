
let q = parseInt(prompt("Please, enter a decimal number to convert to binary: "));
let result = []; 

while (parseInt(q) !== 0) {
    let r = q % 2;
    result.push(r.toString());
    q = parseInt(q / 2);
}

result = result.reverse();

alert("Your number converted to binary is " + result.join("") + "!");