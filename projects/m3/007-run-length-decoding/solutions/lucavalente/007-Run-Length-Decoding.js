let inputList = ["A",12,"B",4,"A",6,"B",1];
let firstListElement,remainingList;

function decodeList(inputList){

    if (inputList.length == 0){
        return [];
    }

    if (inputList[1] == 0){
        return decodeList(inputList.slice(2,));
    }else{
        inputList[1]--;
        return [inputList[0]].concat(decodeList(inputList));
    }
    
    }

console.log(decodeList(inputList));