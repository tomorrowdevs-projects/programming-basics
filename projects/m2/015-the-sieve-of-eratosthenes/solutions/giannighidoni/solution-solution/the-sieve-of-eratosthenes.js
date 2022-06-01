const listNum = [];
const primeNum = [];

let i = 2;
while( i <= 10000 ){
    listNum.push(i);
    i++;
}

listNum.forEach((eLis, inLis) => {
    if(eLis != 0){
        listNum.forEach((eSub, inSub) => {
            if(eSub % eLis === 0 && eSub != eLis){
                listNum[inSub] = 0;
            }
        })
        primeNum.push(eLis);
        listNum[inLis] = 0;
    }
})
    
console.log(primeNum);