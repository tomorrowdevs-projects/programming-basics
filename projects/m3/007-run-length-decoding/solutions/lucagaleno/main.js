//007-run-length-decoding & second part 008-run-length-encoding

const list = ['A','A','A','A','A','A','A','A','A','A','A','A','B','B','B','B','A','A','A','A','A','A','B']; //[A,1,B,2]

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
        let list1Element = codingCompression([list[0]], count)
        let list2Element = codingCompression(list.slice(1))
        return list1Element.concat(list2Element)
    }

    if (list[0] === list[1]) {
        tempList = list.slice(1)
        return codingCompression(tempList, count += 1)
    }
}

// 008-run-length-encoding

function decoding(compressedList){

    let first2Elements = compressedList.slice(0,2)

    //base
    if (compressedList.length === 0) {
        return compressedList;
    }

    //recursion
    for (let i = 1; i < first2Elements[1]; i++) {       
        first2Elements.push(first2Elements[0]);
    }

    //concat first2Element array filtered with recursive function of the remaing array.
    return (first2Elements.filter(element => typeof element === 'string')).concat(decoding(compressedList.splice(2)))
    
}

console.log(`input: ${list}`)
console.log(`encoding function: ${codingCompression(list)}`)
console.log(`decoding function: ${decoding(codingCompression(list))}`)
