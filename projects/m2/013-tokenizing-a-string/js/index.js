const prompt = require("prompt-sync")();

// const exp = prompt("Insert an expression: ").split(" ") //=> 20 - (5 * 4)
const exp = "15- (5 * 10)".split(" ");
function tokenString(exp){
    const symbol = ["*","/","^","-","+","(",")","[","]","{","}"]
    const number = [];
    const newSymbol = [];
    for(i=0;i<exp.length;i++){ //20
        for (j=0; j<exp[i].length;j++){
            let value = exp[i];
            if(symbol.includes(value[j])){
                console.log(value[j])
            }else{
                number.push(value[j])
            }
        }
    }
    return number.join("") ;
}

console.log(tokenString(exp));

