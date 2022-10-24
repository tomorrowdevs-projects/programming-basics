//007-run-length-decoding

const list = ["A", "A", "A", "A", "A", "A", "A", "A", "A", "A", "A", "A", "B", "B", "B","B","A","A","A","A","A","A","B"]; //[A,1,B,2]

function decoding(list, count) {

    let count = count || 1;
    const listLength = list.length 

    //base
    if ((listLength === 1)) {
        list.push(count)
        return list
    }

    //recursion
    if (list[0] != list[1]) {

        let list0 = decoding([list[0]], count)
        let list1 = decoding(list.slice(1))

        return list0.concat(list1)
    }

    if (list[0] === list[1]) {

        tempList = list.slice(1)
        return decoding(tempList, count += 1)
    }
}

console.log(`decoded list of ["A", "A", "A", "A", "A", "A", "A", "A", "A", "A", "A", "A", "B", "B", "B","B","A","A","A","A","A","A","B"]:
${decoding(list)}`)

