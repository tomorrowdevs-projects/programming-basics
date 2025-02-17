
let inputList = ["A", "A", "A", "A", "A", "A", "A", "A", "A", "A", "A", "A", "B", "B", "B","B","A","A","A","A","A","A","B"];
let firstListElement,remainingList;

function decodeList(inputList){

    if (inputList.length == 0){
        return [];
    }

    firstListElement = [inputList[0],0];

    if (inputList.length == 1){
        firstListElement[1]++;
        return firstListElement;
    }

    for (i = 0; i < inputList.length; i++){
        if (firstListElement[0] == inputList[i]){
            firstListElement[1]++;
        }else{
            remainingList = inputList.slice(i);
            break;      
        }
    }

    return firstListElement.concat(decodeList(remainingList));

    }

console.log(decodeList(inputList));