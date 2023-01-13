

const list = ["A", "A", "A", "A", "A", "A", "A", "A", "A", "A", "A", "A", "B", "B", "B","B","A","A","A","A","A","A","B"];


function decodeList (list, counter = 0) {
    
// Setting up base case, when function is on last item on list, we push counter to  the list and return it.
    if ((list.length === 1)) {
        list.push(counter);
        return list;
    };


// If two consecutive elements are equal, we slice the second from the list and add 1 to the counter.
    if (list[0] === list[1]) {
        return decodeList(list.slice(1), counter += 1);
    };


//  When two near elements in the list are different we push the counter in the list and recursively recall it on the next item.
    if (list[0] !== list[1]){
        let l1 = decodeList([list[0]], counter += 1);
        let l2 = decodeList(list.slice(1));
        return l1.concat(l2);
    };
    

    return list;
    
};

console.log(decodeList(list));