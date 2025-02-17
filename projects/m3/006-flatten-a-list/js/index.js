function flatten(list) {
    if (list.length === 0) {
        return [];
    }

    if (Array.isArray(list[0])) {
        return flatten(list[0]).concat(flatten(list.slice(1)));
    }
    
    else {
        return [list[0]].concat(flatten(list.slice(1)));
    }
}

console.log(flatten([1, [2, 3], [4, [5, [6, 7]]], [[[8], 9], [10]]])); 
console.log(flatten([1, 2, [3, 4], [5, [6, 7]]])); 
console.log(flatten([[1, 2], [3, 4], [5, 6]])); 