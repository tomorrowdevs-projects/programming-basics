let numIns = prompt("Insert a four-digit integer, I'll make the sum of its numbers");
    let firstChar = numIns[0];
    let secondChar = numIns[1];
    let thirdChar = numIns[2];
    let fourthChar = numIns[3];

    alert( `The sum of your number digits is: ${+firstChar + +secondChar + +thirdChar + +fourthChar}`);
    