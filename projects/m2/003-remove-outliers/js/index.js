const readline = require('readline/promises');
const { stdin: input, stdout: output } = require('process');


const getSort=(array)=>{
    array.sort((a,b)=> a - b)
    return array

}


const getMinIndex=(array)=>{
   let countIndex = 0;
    let index = 1;
     let min = array[0];

     while(countIndex < 1){
        if(array[index] !== min){
            countIndex++
        }
        else{
        index++
        }
    }

    return index + 1
}

const getMaxIndex=(array)=>{
    countIndex = 0
    let index = array.length - 2;
    const max = array[array.length - 1];
    while (countIndex < 1){
        if(array[index] !== max){
            countIndex++
        }
        else{
        index--;
        }
    }
    return index;

}



async function main() {
    const rl = readline.createInterface({ input, output });
     try{
       const arrayRes=await getInput(rl);
        const sortArray= getSort([...arrayRes]);
        const minIndex = getMinIndex(sortArray)
        const maxIndex= getMaxIndex(sortArray);
        const stringResult= sortArray.join('\n');
     
        console.log(stringResult);
        const notOutliers=sortArray.slice(minIndex,maxIndex);
        const notOutLiersString=notOutliers.join('\n');
      
        console.log('not outliers');
        console.log(notOutLiersString);
      
     
     }
     catch(e){
        console.log(e)
     }
     finally{
        rl.close();
     }
    
    }
    main();




async function getInput(rl,result=[]){
   
   const input = await rl.question(`Please enter the number: `)
    //const inputNumber = Number.parseInt(input,10);
   const inputNumber = Number(input,10);

    if(inputNumber === 0 && result.length > 4){
        return result
    }
    
    if(!Number.isNaN(inputNumber) && inputNumber > 0){
        result.push(inputNumber);
    }
    else if(inputNumber < 0){
        console.log('Please enter a positive number')
    }
    else if(inputNumber === 0 && result.length < 4){
        console.log('You have to enter at least 4 number')
    }
    else{
        console.log('you dont have netered a number,please enter a number')
    }
   
    return getInput(rl,result);

}