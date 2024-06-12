
// 01-sorted-order (m2)

let inputValue;
let inputStop = 0;
const arrayValues = [];

while (!(inputValue === inputStop)){

    inputValue = parseInt(prompt('Keep enetering integer (0 to stop the process): ', 0));

    if (inputValue != inputStop){
        arrayValues.push(inputValue);
    };
};

arrayValues.sort(function(a, b){return a-b});

arrayValues.forEach((element) => {
    console.log(element);
});

//oppure

console.info(arrayValues.join('\n'));


