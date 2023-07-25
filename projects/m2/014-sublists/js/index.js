function isSublist(largerList, smallerList){
    if( largerList.length >  smallerList.length){
        if( Array.isArray( smallerList ) && smallerList.length === 0 ){
            return true;
        }

        const firstElementindex = largerList.indexOf(smallerList[0]);

        if( firstElementindex !== -1 ){
            for (let i = 0; i < smallerList.length; i++) {
                if( smallerList[i] !== largerList[firstElementindex+i]){
                    return false;
                }
            }

            return true;
        }
    }

    return false;
}

function init(){
    console.log(isSublist([1, 2, 3, 4], [1, 2]));
    return;
}
init();