
function findMatchingIndex(firstList, secondList){
    let matchingIndex = false;
    firstList.forEach((value, index) => {
        if (secondList[0] === value) {
            matchingIndex = index;
        }
    });

    return matchingIndex;
}

function isSublist(largerList, smallerList){
    if( largerList.length > smallerList.length){
        if( Array.isArray( smallerList ) && smallerList.length === 0 ){
            return true;
        }

        let matchingIndex = findMatchingIndex(largerList, smallerList);
        if(matchingIndex !== false){
            let sublist = true;

            smallerList.forEach((value) => {
                if( value !== largerList[matchingIndex]){
                    sublist = false;
                } else {
                    matchingIndex++;
                }
            });

            return sublist;
        }

    }

    return false;
}

function init(){
    console.log(isSublist([1, 2, 3, 4], [1]));
    return;
}
init();