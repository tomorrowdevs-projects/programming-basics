let money = 155.75
const showMoney = money

const changes = [200, 100, 50, 20 ]



const result = changes.map(value => {
    if(money <= 0) return 0
    const change =  Math.floor((money / value) * 100)
    money = money - (change * value) / 100
    return change
})

console.log(`${showMoney} Euro is composed by ${result[0]} Of 2 EURO,
 ${result[1]} Of 1 EURO, ${result[2]} Of 50 CENT and ${result[3]} Of 20 CENT
 `)
