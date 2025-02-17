let list = [1,2,3,4,5,6,7,8];
let list2 = ['dog', 'cat', 'horse', 'duck', 'bird', 'fish'];



function isSublist (bigList, smallList){
    let indexMatch = [];
    const small = smallList.length;
    const big = bigList.length;

    smallList.map(e => {
        if(bigList.includes(e)) indexMatch.push(bigList.indexOf(e));
    });
    const match = indexMatch.length;
    const delta = indexMatch.slice(1).map((e, i) => e - indexMatch[i]);

    if(small === 0 || match === 1) return true;
    else if (small > big) return false;
    else if (match === small) return delta.every(elem => elem === 1);
    else return false;
};

console.log(isSublist(list, [1,2,3,4,5,6,7,8]));
console.log(isSublist(list, [1,2,3,4,5,6,7,8,9,10,11]));
console.log(isSublist(list, []));
console.log(isSublist(list, [3,4]));
console.log(isSublist(list, [3,4,5,6,7,8]));
console.log(isSublist(list, [1,2,3,5,6,7,8]));
console.log(isSublist(list, [1,2,31,4,5]));
console.log(isSublist(list2, ['dog', 'cat', 'horse', 'duck', 'bird', 'fish']));
console.log(isSublist(list2, []));
console.log(isSublist(list2, ['dog', 'cat']));
console.log(isSublist(list2, ['cat', 'horse', 'duck', 'bird']));
console.log(isSublist(list2, ['cat', 'horse', 'geko', 'bird']));
console.log(isSublist(list2, ['dog', 'horse', 'duck', 'bird', 'fish']));
