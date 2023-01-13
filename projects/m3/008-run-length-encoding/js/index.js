const list = ["A", 12, "B", 4, "A", 6, "B", 1];

const runLengthDec = (arr) =>{

   if(arr.length === 0) return arr;
    
   return arr[0].repeat(arr[1]) + runLengthDec(arr.slice(2))
   
   
}

console.log(runLengthDec(list));