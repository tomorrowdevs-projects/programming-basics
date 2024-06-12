const str1 = "pinco";
const str2 = "ponci";

function createDict(str){
    const dictStr = {};
    const strArr = str.split("");
    strArr.forEach(e => {
        let tempKeys = Object.keys(dictStr);
        if(tempKeys.includes(e)){
            for(let tempKey of tempKeys){
                if(tempKey === e){
                    dictStr[tempKey]++;
                }
            }
        } else {
            dictStr[e] = 1;
        }
    })
    return dictStr;
}

const dictStr1 = createDict(str1);
const dictStr2 = createDict(str2);

if(Object.keys(dictStr1).length === Object.keys(dictStr2).length){
    let count = 0;
    for(let key1 in dictStr1){
        for(let key2 in dictStr2){
            if(key1 === key2 && dictStr1[key1] === dictStr2[key2]){
                count++;
            }
        }
    }
    if(Object.keys(dictStr1).length === count){
        console.log(true);
    } else {
        console.log(false);
    }
} else {
    console.log(false);
}