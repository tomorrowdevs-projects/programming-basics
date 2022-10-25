//007-run-length-decoding & 008-run-length-encoding

const list = ["A", "A", "A", "A", "A", "A", "A", "A", "A", "A", "A", "A", "B", "B", "B","B","A","A","A","A","A","A","B"]; //[A,1,B,2]

function codingCompression(list, count) {

    count = count || 1;
    const listLength = list.length 

    //base
    if ((listLength === 1)) {
        list.push(count)
        return list
    }

    //recursion
    if (list[0] != list[1]) {

        let list0 = codingCompression([list[0]], count)
        let list1 = codingCompression(list.slice(1))

        return list0.concat(list1)
    }

    if (list[0] === list[1]) {

        tempList = list.slice(1)
        return codingCompression(tempList, count += 1)
    }
}



function decoding(compressedList){

let first2Elements = compressedList.slice(0,2)

if (compressedList.length === 0) {
    return compressedList;
}
    for (let i = 1; i < first2Elements[1]; i++) {       
        first2Elements.push(first2Elements[0]);
    }
    first2Elements = first2Elements.filter(element => typeof element === 'string');
    if (compressedList.splice(0,2).length != 0) { //splice alredy "cut" the array here
        lastElements = decoding(compressedList);
    } else { lastElements = [] }
return first2Elements.concat(lastElements)
}

console.log(`input: ${list}`)
console.log(`encoding function: ${codingCompression(list)}`)
console.log(`decoding function: ${decoding(codingCompression(list))}`)
