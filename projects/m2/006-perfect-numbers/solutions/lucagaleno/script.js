// 006-perfect-number

function perfectNum(num){
    const numList = [];
    for (i=1 ; i <= num - 1; i++){
    
        if (num % i === 0){
            numList.push(i);
        };
    };
   
    //const sum = numList.reduce((accumulator, value) => {
    //    return accumulator + value;
    //});

    //oppure
    let sum = 0;
    for(const value of numList){
        sum += value;
    }

    if (sum === num) {
        numList.length = 0;
        return true;
     } else {
        numList.length = 0;
        return false;
    };
};


let input = parseInt(prompt('Enter an integer to determine if is a perfect number',''));
    
if (perfectNum(input) == true) {
    console.log('The ' + input + ' is perfect number!');
} else {
     console.log('The ' + input + ' is not perfect number!');    
};

const perfectNumList = [];

for (x=1 ; x <= 10000 ; x++){

    if (perfectNum(x) === true){
        perfectNumList.push(x);
    }
};
console.log('The follow are perfect number before 10000:')
console.info(perfectNumList);