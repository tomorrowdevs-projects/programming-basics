const  number = [1, [2, 3], [4, [5, [6, 7]]], [[[8], 9], [10]]];

const number2 = [[1,[2,3]],4,[5,6,[7,[8,9,10,[11,12]]]],13,14,[16,[17,[18]]]];

const number3 = [];


const flattenList = (data) =>{

   let l1;
   let l2;

   if(data.length === 0) return data;
   
   if(typeof(data[0]) === 'object'){
     l1 = flattenList(data[0]);
     l2 = flattenList(data.splice(1));
     return l1.concat(l2);
   }

   if(typeof(data[0]) !== 'object'){
     l1 = [].concat(data[0]);
     l2 = flattenList(data.splice(1));
     return l1.concat(l2);
   }


}

console.log(flattenList(number))
console.log(flattenList(number2))
console.log(flattenList(number3))