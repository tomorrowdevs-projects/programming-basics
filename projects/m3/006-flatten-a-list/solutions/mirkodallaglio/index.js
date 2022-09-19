function flattening (data){
    return data.reduce((result, el) => {
        if (Array.isArray(el)) return result.concat(flattening(el));
        return result.concat(el);
    }, []);
}


const list = [1, [2, 3], [4, [5, [6, 7]]], [[[8], 9], [10]]];
const list1 = [[1, 2, 3], [4,[[5,6,[7,8,[9,10]]],11]]];
const list2 = [1, [2, 3]];
const list3 = [[[[1,2],[3,4]],[[5,6],[7,8]]],[[[9,10],[11,12]],[[13,14],[15,16]]]];
const list4 = [1, [2,3,4,[5,6,[7,8, [9,10,[11,12,[13,14]]]]]]];
const list5 = [[[[[[[1,2],3],4],5],6],7],8];

console.log(flattening(list))
console.log(flattening(list1))
console.log(flattening(list2))
console.log(flattening(list3))
console.log(flattening(list4))
console.log(flattening(list5))
