// find all the combinations on a matrix of arrays

coins = [1,5,10,25,0]
nC = 2;
dollar = 50
let newCoins = []

for(let i = 0; i <= nC-1; i++){
    newCoins.push(coins);
}

function getCombinations(arr, n, dollar) {
    let i, j, k, elem, l = arr.length,
       childperm, ret = [];

    if (n == 1) {
      for (i = 0; i < arr.length; i++) {
         for (j = 0; j < arr[i].length; j++) {
            ret.push([arr[i][j]]);
         }
         
      }
      return ret
       

   } else {
      for (i = 0; i < l; i++) {
         elem = arr.shift();
         for (j = 0; j < elem.length; j++) {
            childperm = getCombinations(arr.slice(), n - 1);
            for (k = 0; k < childperm.length; k++) {
               ret.push([elem[j]].concat(childperm[k]));
               }  
         }
      }
      return ret
   }
} 


 console.log(getCombinations(newCoins, nC, dollar))



