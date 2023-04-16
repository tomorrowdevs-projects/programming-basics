let mathExpression = prompt('Enter a mathematical expression');

/* expMathToToken :
        input= String with math expression(integer number);
        output= array with individual tokens; */

function expMathToToken (string){
    const result = [];
    string.split(' ')                                               //convert string to array without spaces
            .filter(elem => elem)                                   //filter the array to remove additional gaps or empty elements
            .map(el => el.split(''))                                //I separate all aggregate characters into sub-array
            .reduce((a, b) => a.concat(b), [])                      //all sub arrays in a main array
            .map(e => {                                             //I fix all the numbers by filling in result
                if(!isNaN(e) && !isNaN(result[result.length-1])){   //if elem is a number and the last element of result is a number then concatenate
                    result[result.length-1] += e;
                }else result.push(e);                               // else push elem into result
            });
    return result;
};

console.log(`Math expression: ${mathExpression}\nTokens:\n${expMathToToken(mathExpression).join('\n')}`);
