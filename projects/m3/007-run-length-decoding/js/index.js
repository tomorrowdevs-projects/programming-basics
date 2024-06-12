const list = ["A", "A", "A", "A", "A", "A", "A", "A", "A", "A", "A", "A", "B", "B", "B", "B", "A", "A", "A", "A", "A", "A", "B"];
const list2 = [];
const runLengthDec = (arr) =>{

   const newArr = [];
   if(arr.length === 0) return arr;
   
   let counter = 1;
   for(let element of arr){
      if(element === arr[counter]){
         counter++;
      }else{
         return newArr.concat(element , counter, runLengthDec(arr.splice(counter)));
      }
   }  
}

console.log(runLengthDec(list));
console.log(runLengthDec(list2));