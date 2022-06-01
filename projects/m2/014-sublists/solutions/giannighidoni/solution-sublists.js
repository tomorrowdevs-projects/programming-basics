const list = [1, 2, 3, 4, 5];
const subList = [1, 2, 5];

function isSublist(list, subList){
    if(subList.length === 0){
        return true;
    } else {  
            for(let iLis = 0; iLis < list.length; iLis++){
                if(subList[0] === list[iLis]){
                    if(subList.length === 1){
                        return true;
                    } else {
                        iLis++;
                        let count = 1;
                        for(let a = 1; a < subList.length; a++, iLis++){
                            if(subList[a] === list[iLis]){
                                count++;
                            }
                        }
                        if( count === subList.length){
                            return true;
                        } else {
                            return false;
                        }
                        break;  
                    }
                }
            }
    }
}

const res = isSublist(list, subList);

console.log(res);