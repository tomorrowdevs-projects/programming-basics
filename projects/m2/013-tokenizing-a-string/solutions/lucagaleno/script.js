//013-tokenizing-a-string

let stringInput = '5*((5+ 15)/2)=500';

function tokenizeString(string){
    let tokenization = [];
    tokenization = string.split(/(\d+|[^ 0-9])/).filter(e => e.trim().length > 0); //da riguardare e capire bene!
    return tokenization;
}

console.log('input: '+stringInput);
console.log(tokenizeString(stringInput));

/* 
input: string (  5*((5+15)/2) = 50  )
output: token (  5,*,(,(,5,+,15,),/,2,),=,50  )
...

*/  
