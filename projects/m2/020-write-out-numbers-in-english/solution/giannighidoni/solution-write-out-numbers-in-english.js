const inputNumber = 369;
const inputNumberString = String(inputNumber);

const number = {
    1 : "one",
    2 : "two",
    3 : "three",
    4 : "four",
    5 : "five",
    6 : "six",
    7 : "seven",
    8 : "eight",
    9 : "nine"
};
const teen = {
    0 : "ten",
    1 : "eleven",
    2 : "twelve",
    3 : "thirteen",
    4 : "fourteen",
    5 : "fifteen",
    6 : "sixteen",
    7 : "seventeen",
    8 : "eighteen",
    9 : "nineteen"
};
const tens = {
    2 : "twenty",
    3 : "thirty",
    4 : "forty",
    5 : "fifty",
    6 : "sixty",
    7 : "seventy",
    8 : "eighty",
    9 : "ninety"
};
const outputArr = [];

switch(inputNumberString.length){
    case 3 :
        for(let key in number){
            if(inputNumberString[0] == key){
                outputArr.push(number[key]);
                outputArr.push("hundred");
            }
        }
        if(inputNumberString[1] == 0){
            for(let key in number){
                if(inputNumberString[2] === key){
                    outputArr.push(number[key]);
                }
            }
        } else if(inputNumberString[1] == 1){
            for(let key in teen){
                if(inputNumberString[2] == key){
                    outputArr.push(teen[key]);
                }
            }
        } else if(inputNumberString[1] > 1){
            for(let key in tens){
                if(inputNumberString[1] == key){
                    outputArr.push(tens[key]);
                }
            }
            for(let key in number){
                if(inputNumberString[2] == key){
                    outputArr.push(number[key]);
                }
            }
        }
        break;
    case 2 :
        if(inputNumber[0] === 1){
            for(let key in teen){
                if(inputNumber[1] == key){
                    outputArr.push(teen[key]);
                }
            }
        } else {
            for(let key in tens){
                if(inputNumberString[0] == key){
                    outputArr.push(tens[key]);
                }
            }
            for(let key in number){
                if(inputNumberString[1] == key){
                    outputArr.push(number[key]);
                }
            }
        }
        break;
    case 1 :
        for(let key in number){
            if(inputNumberString[0] == key){
                outputArr.push(number[key]);
            }
        }
        break;
}

const outResult = outputArr.join(" ");
console.log(outResult);