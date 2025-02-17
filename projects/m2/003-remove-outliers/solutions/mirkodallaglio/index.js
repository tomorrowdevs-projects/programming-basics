let value = '';
let arr = [];
let n = 0;
let nmin = 0;

function removeExtreme (arr, n){
    let discarded = [];
    let values = arr;
    let max = 0;
    let min = 0;

    for(i=0; i < n; i++){
        max = Math.max(...values);
        min = Math.min(...values);
        discarded.push(min, max);
        values= values.filter(elem => elem !== max);
        values= values.filter(elem => elem !== min);
    };
    discarded.sort(function(a, b){return a-b});
    return { discarded, values };
};

let i = 1;
do{
    value = Number(prompt('Enter a number int or negative or decimal, enter 0 to exit'));

    if(/^[-+]?\d+(\.\d+)?$/.test(value)){

        if(value === 0 && arr.length >= 4) {
            i = 0;
            do {
                n = Number(prompt(`the values entered are ${arr.length}:    ${arr.join(', ')}\n\nWrite the number of extreme elements you want to remove`));
                nmin = Math.round(arr.length /2)-1;
                if(n > nmin) alert(`You have entered ${arr.length} values, you cannot discard more than ${nmin}`);
            }while(!(/^[0-9]+$/.test(n) && n < arr.length / 2)); 

        }else if (value === 0 && arr.length < 4){
            alert(`You must enter at least 4 values, you are entered ${arr.length} value`);
        }else arr.push(value);

    }else alert('You have entered the wrong value');

}while(i !== 0);

    let result = removeExtreme(arr, n);
    alert(`The discarded elements are: ${result.discarded.join(', ')}\nThe value are: ${result.values.join(', ')}`);
