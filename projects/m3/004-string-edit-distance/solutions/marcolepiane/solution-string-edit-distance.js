let firstString= prompt('insert first string');
let secondString = prompt('insert second string');

function editDistance(firstString, secondString){
    if(firstString.length === 0){
        return secondString.length;
    } else if(secondString.length === 0){
        return firstString.length;
    }else{
        let cost =0;



        if (!firstString.length-1 === secondString.length-1){
            cost = 1;
        }else{
            let d1 =editDistance(firstString.slice(0, -1), secondString +1);
            let d2 =editDistance(firstString, secondString.slice(0, -1) +1);
            let d3 =editDistance(firstString.slice(0,-1), secondString(0, -1), );

            return cost = reduce(d1, d2, d3);
        }
    }
}