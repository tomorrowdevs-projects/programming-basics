const deposit_SmallConteiner = 0.10;
const deposit_BigConteiner = 0.25;

let SmallConteiner = prompt("Please insert the number of containers small", 0);
let BigConteiner = prompt("Please insert the number of containers big", 0);
let refoundTot =   SmallConteiner * deposit_SmallConteiner + BigConteiner * deposit_BigConteiner;

console.log( `The total reimbursement of the deposited containers is $ ${refoundTot.toFixed(2)}`);

document.write(`The total reimbursement of the deposited containers is $ ${refoundTot.toFixed(2)}`);
