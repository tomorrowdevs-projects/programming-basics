const dollar = Number(prompt('Enter a dollar amount'));
const numCoins = Number(prompt('Enter the number of coins you want to change with'));
const coins = {
    value: [25,10,5,1],
    name: ['quarter', 'dime', 'nickel', 'penny'],
}; 


function dollarCheckCoin (coins, dollar, numCoins) {
    let result = [];

    function checkAllPossibility(arr=[], sum=0, index=0) {
        if(sum > dollar) return;
        if(sum === dollar && arr.length === numCoins) result.push(arr);

        for(let i = index; i < coins.value.length; i++) {
         checkAllPossibility([...arr, coins.value[i]], sum + coins.value[i], i);
        }
    };
    checkAllPossibility();

    return result.length > 0 ? result : false
};

const result = dollarCheckCoin(coins, dollar*100, numCoins);
const tmp = [];

if(result){
    result.forEach(el => {
        grouped = el.reduce((acc, v, i, a) => {
            if (v === a[i - 1]) {
                acc[acc.length - 1].push(v);
            } else {
                acc.push([v]);
            }
            return acc;
        }, []);
        tmp.push(grouped)
    })
    let label = '';
    tmp.forEach((res, labIndex) => {
        coins.name.forEach((coinName, coinIndex) => {
            if(tmp[labIndex][coinIndex] !== undefined)
                label += `${coinName}: ${tmp[labIndex][coinIndex].length }  `
        })
        label += '\n'
    })
    alert(`${dollar} dollar can be exchanged for ${numCoins} coins:\n\nall possible solutions below:\n\n${label}`)
}else alert(`${dollar} dollar cannot be exchanged for ${numCoins} coins ${String.fromCodePoint(0x1F615)}`)
