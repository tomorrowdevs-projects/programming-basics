const NUM_EQUALS= 3;
const NUM_TENTATIVI= 10;
function getRandomIntInclusive(min, max) {
    const minCeiled = Math.ceil(min);
    const maxFloored = Math.floor(max);
    return Math.floor(Math.random() * (maxFloored - minCeiled + 1) + minCeiled); // The maximum is inclusive and the minimum is inclusive
  }

 function main() {
        const randomArray= getInput();

        const lung = randomArray.reduce((acc,next)=>{
            return acc+= next.length
        },0)
        
        console.log(`On average, ${lung /randomArray.length} flips were needed.`)
}
    main();



function getRandomVal(){
    return getRandomIntInclusive(0,1) === 0 ? 'T':'H'
}


function getRandom(array=[],count = 0){

    if(count === NUM_EQUALS){
        return array;
    }

    const randomVal = getRandomVal(0,1);
    if(randomVal !== array.at(-1)){
        count=1;
    }
    else{
        count++;
    }
    array.push(randomVal);

    return getRandom(array,count);
}



 function getInput(array=[],obj={}){
   
  if(array.length === NUM_TENTATIVI){
    return array;
  }

  const randomArray = getRandom();
  array.push(randomArray);
  console.log(`${randomArray.join(' ')} (${randomArray.length} flips)`)

return getInput(array,obj)
  }


