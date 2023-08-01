function writeDownAllNumbers(limit){
    const numbersList = [];

    for (let i = 2; i <= limit; i++) {
        numbersList.push(i);
    }

    return numbersList;
}

function findPrimeNumbers(limit){
    const numbersList = writeDownAllNumbers(limit);
    let p = 2;
    
    while( p < limit ){
        let next = 0;
        for (let i = p; i*p <= limit; i++) {
            numbersList[(i*p)-2] = 0;
        }

        for (let i = p-2; i < numbersList.length; i++) {
            if( numbersList[i] !== 0 && numbersList[i] > p ){
                next = numbersList[i];
                break;
            }
        }

        if(next === 0){
            break;
        } else {
            p = next;
        }

    }

    return numbersList;
}

function init(){
    const primeNumbers = findPrimeNumbers(1000000);
    console.log(primeNumbers);

    return;
}
init();