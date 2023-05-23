let number = parseInt(Math.random() * (100 - 1) + 1);

const array = [];
array.push(number);
console.log(parseFloat(number) + " -> updated");

let maxVal = 1;
let countVal = 1;


for (i=0; i<99;i++){
    let newNumber = parseInt(Math.random() * (100 - 1) + 1);
        if (newNumber > number) {
            number = newNumber;
            console.log(number + " -> updated");
            countVal++;
            maxVal++;
          }else{
            console.log(parseFloat(newNumber));
            maxVal++;
          }
}
console.log(`The maximum value found was" ${maxVal} times`);
console.log(`The maximum value was updated" ${countVal} times`);