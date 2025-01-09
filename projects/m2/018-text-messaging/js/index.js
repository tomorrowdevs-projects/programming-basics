const readline = require('readline/promises');
const { stdin: input, stdout: output } = require('process');


const Obj = {
1: ['.', ',', '?', '!', ':'],
    2: ['A', 'B', 'C'],
    3: ['D', 'E', 'F'],
    4: ['G', 'H', 'I'],
    5: ['J', 'K', 'L'],
    6: ['M', 'N', 'O'],
    7: ['P', 'Q', 'R', 'S'],
    8: ['T', 'U', 'V'],
    9: ['W', 'X', 'Y', 'Z']
}


function getLetter(index,char,input){
    console.log('entro',{
        index,char,input
    });
    
    let newIndex = index
    let found = false;
    let limit =  index + Obj[char].length;
    while(newIndex < limit && !found){
        console.log('while');
        if(input[newIndex] !== char){
            found= true;
        }
        else{newIndex+=1;
        }
    }
    console.log({
        newIndex,
        index,
        c:Obj[char],
        diff:newIndex - index
    })


    return {newChar:Obj[char][newIndex - index - 1],newIndex}

}

console.log('4433555555666110966677755531111');
console.log(getPhraseList('4433555555666110966677755531111'))

function getPhraseList(input){
    console.log({input,len:input.length})
    let result = '';
    let index = 0;
    
    
    while(index < input.length){
        
        const char = input[index]
        if(input[index] === '0'){
            result+= ' '
            index++;
        }
        else if(!!Obj[char]){
            console.log('dovrei essere qui');

            const {newChar,newIndex} = getLetter(index,char,input)
            
            result+=newChar
            index = newIndex;
        }
    }
    
    
    return result;


}


async function main() {
    
    
    const rl = readline.createInterface({ input, output });
     try{
       const inputNumber=await getInput(rl);
      const inputPhrase = getPhraseList(inputNumber);
       console.log(phraseList); 


     
     }
     catch(e){
        console.log(e)
     }
     finally{
        rl.close();
     }
    
    }
   //main();




async function getInput(rl){
   
   const input = await rl.question(`Please enter the SEQUENCE OF NUMBER: `)
    const inputNumber = Number.parseInt(input,10);
    if(!Number.isNaN(inputNumber)){
        return inputNumber
    }
   
    //console.log("Please Enter a valid number")
   return getInput(rl);

}