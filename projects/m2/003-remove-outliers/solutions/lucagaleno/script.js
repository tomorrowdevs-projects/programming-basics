
// 003 remove outliers

let inputValue;
let minInput = 0;
const arrayValues = [];
let arrayValuesRemain = [];
let arrayValuesExreme = [];
let n = 2;

while ((minInput <= 4) || ((inputValue != 0))){
    inputValue = parseInt(prompt('Keep enetering integer, min 4 values (0 to stop the process): ', 0));
    minInput = minInput + 1;
   
    if (inputValue != 0){
        arrayValues.push(inputValue);
    };

    if(isNaN(inputValue)) {
        alert('Error, try again!');
        stop();
        //break;
    }
};

function removeElements(values, n, solution){ //solution aggiunto per comodità nel mostrare tutti i risultati
    const newArrayValues = [];
    const arrValues = values.slice(); //duplicate array
    let removed ;
        
    for (i=0; i<=n-1 ;i++){
        let max = Math.max(...arrValues);
        newArrayValues.push(max);
        removed = arrValues.splice(arrValues.indexOf(max),1);
        
        let min = Math.min(...arrValues);
        newArrayValues.push(min);
        removed = arrValues.splice(arrValues.indexOf(min),1);
    };

    newArrayValues.sort(function(a, b){return a-b});
    arrValues.sort(function(a, b){return a-b});

    // if per scegliere la soluzione che si desidera
    if (solution === 1) {
        return arrValues;
    }
    if (solution === 2) {
        return newArrayValues;
    }
};

arrayValuesRemain = removeElements(arrayValues, n, 1);
arrayValuesRemain.sort(function(a, b){return a-b});

arrayValuesExreme = removeElements(arrayValues, n,2);
arrayValuesExreme.sort(function(a, b){return a-b});

console.log ('Number of min and max number to cancel from the list: ' + n +'max and' + n + 'min.' );
console.log('Initial input numbers: '+ arrayValues);
console.log('Numbers without exreme: ' +arrayValuesRemain);
console.log('Extreme numbers: ' +arrayValuesExreme);


