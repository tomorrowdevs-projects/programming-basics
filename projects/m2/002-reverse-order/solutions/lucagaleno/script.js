
// 02-reverse-order (m2)

let inputValue;
let inputStop = 0;
const arrayValues = [];

while (!(inputValue === inputStop)){

    inputValue = parseInt(prompt('Keep enetering integer (0 to stop the process): ', 0));

    if (isNaN(inputValue)){
        alert('Error! Start the process again.');
        break;
    }

    if (inputValue != inputStop){
        arrayValues.push(inputValue);
    };
};

arrayValues.sort(function(a, b){return b-a});

console.info(arrayValues.join('\n'));

