// const prompt = require("prompt-sync")({ sigint: true}) ;

function findTokens(expression){
    const tokens = [];
    const operatorsAndParentheses = ['*','/','ˆ','-','+','(',')'];
    // Remove space and whitespace
    expression = expression.replaceAll(' ', '');
    
    if( expression.length > 0 ){
        let j = 0;

        for (let i = 0; i < expression.length; i++) {

            tokens[j] = expression.charAt(i);

            if( ! operatorsAndParentheses.includes(tokens[j]) ){
                while( ! operatorsAndParentheses.includes(expression.charAt(i+1)) && i < expression.length-1 ){
                    tokens[j] += expression.charAt(i+1);
                    i++;
                }
            }

            j++;
        }
    }


    return tokens;
}
// This check ensure that the main program only runs when the solution has not been imported into another file.
// i.e. if require.main is the current module, then the current module was loaded from the node command line and not from other file
if (require.main === module) { 
    function init(){
        const askedExpression = prompt('Enter a mathematical expression');
        const tokens = findTokens(askedExpression);

        for (let i = 0; i < tokens.length; i++) {
            console.log( tokens[i] );
        }
        
        return;
    }
    init();
}