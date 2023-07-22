// H T T T (4 flips)
// H H T T H T H T T H H T H T T H T T T (19 flips)
// T T T (3 flips)
// T H H H (4 flips)
// H H H (3 flips)
// T H T T H T H H T T H H T H T H H H (18 flips)
// H T T H H H (6 flips)
// T H T T T (5 flips)
// T T H T T H T H T H H H (12 flips)
// T H T T T (5 flips)
//On average, 7.9 flips were needed.

const array = ["H","T"]

let arrayResults = [];
let totalResults = [];
let count = 0;
let count2 = 0;
let sum = 0;

while (count2 < 10){
    while(count < 1){
        const hT = Math.floor(Math.random()*array.length);
        let lastResults = array[hT]
        arrayResults.push(lastResults);
        if (arrayResults.length>=3){
            if (lastResults === arrayResults[arrayResults.length-2] && lastResults === arrayResults[arrayResults.length-3]){
                count++
                count2++
            } 
        }
    }
    console.log(arrayResults + " (" + arrayResults.length + " flips)");
    count = 0;
    totalResults.push(arrayResults.length);
    arrayResults = [];
    
}
for(i=0;i<totalResults.length;i++){
    sum += totalResults[i];
}
console.log("On average, " + sum / count2 + " flips were needed.");


