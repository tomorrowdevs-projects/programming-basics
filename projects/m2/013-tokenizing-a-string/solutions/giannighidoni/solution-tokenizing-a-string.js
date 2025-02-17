const expression = "((2265+3) - 1)/ 20";
const expTokenArr = expression.split('');
const numbers = ["0", "1", "2", "1", "3", "4", "5", "6", "7", "8", "9"];
let token = [];
let i = 0;

while(i < expTokenArr.length){
    if(expTokenArr[i] != " "){
        if(!numbers.includes(expTokenArr[i])){
            token.push(expTokenArr[i]);
            i++;
        } else {
            const countAfter = i;
            let a = [];
            a.push(expTokenArr[i]);
            i++;
            while(numbers.includes(expTokenArr[i])){
                a.push(expTokenArr[i]);
                i++;
            }
            const ountBefore = a.length;
            token.push(a.join(''));
            i = ountBefore + countAfter;
        }
    } else {   
        i++;
    } 
}

console.log(token);