
const MAX = 100;
const MIN = 10;



function getRandomIntInclusive(min, max) {
    const minCeiled = Math.ceil(min);
    const maxFloored = Math.floor(max);
    return Math.floor(Math.random() * (maxFloored - minCeiled + 1) + minCeiled); // The maximum is inclusive and the minimum is inclusive
  }





 function main() {
        const {max,count}= getInput();
        console.log(`The maximum value found was ${max}
                    The maximum value was updated ${count} times`)

}
    main();




 function getInput(array=[],obj={}){
   
  if(array.length === 100){
    return obj;
  }
  const {max = 0,count = 0} = obj;
  const randomValue=getRandomIntInclusive(MIN,MAX);
  let result = `${randomValue}`;
  if(randomValue > max){
    result +=' <== Update'
    obj={
    ...obj,
    max:randomValue,
    count:count + 1
    }
}
console.log(result);
array.push(randomValue);

return getInput(array,obj)
  }


