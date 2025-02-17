// constant statements
const deposit_smallConteiner = 0.1;
const deposit_bigConteiner = 0.25;
//variable declaration
let smallConteiner, bigConteiner, refoundTot;
smallConteiner = prompt("Please insert the number of containers small", 0);
bigConteiner = prompt("Please insert the number of containers big", 0);
refoundTot =
  smallConteiner * deposit_smallConteiner + bigConteiner * deposit_bigConteiner;

console.log(
  `The total reimbursement of the deposited containers is $ ${refoundTot.toFixed(
    2
  )}`
);

document.write(
  `The total reimbursement of the deposited containers is $ ${refoundTot.toFixed(
    2
  )}`
);
