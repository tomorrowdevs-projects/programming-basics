const getDistance = (str1, str2) =>{

   if(str1.length == 0) return str2.length;
   if(str2.length == 0) return str1.length;

   let cost = 0;

   if(str1[str1.length - 1] != str2[str1.length - 1]) cost = 1;

   const d1 = getDistance(str1.slice(0,-1) , str2 ) + 1;
   const d2 = getDistance(str1, str2.slice(0,-1) ) + 1;
   const d3 = getDistance(str1.slice(0,-1), str2.slice(0,-1)) + cost;

   return Math.min(d1,d2,d3);
}

console.log(getDistance("Matteo", "Mattia"));
console.log(getDistance("kitten", "sitting"));