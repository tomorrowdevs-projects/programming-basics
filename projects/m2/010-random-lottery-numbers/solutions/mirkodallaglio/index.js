function lotteryNumGen (){
    let number = [];
    let num = 0;

    do{
        num = Math.floor(Math.random() * 49)+1;
        if(!number.includes(num))number.push(num);

    }while(number.length !== 6)
    
    return number.sort((a, b) => a-b);
};

console.log(lotteryNumGen().join(' - '));