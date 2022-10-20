const getLotteryNumber = () => {

    let arrLottery = [];

    while (arrLottery.length != 6) {

        const randomNumber = Math.floor((Math.random() * 49) + 1)

        if (!arrLottery.includes(randomNumber)) {
            arrLottery.push(randomNumber);
        }
    }

    arrLottery.sort((a, b) => a - b);

    return arrLottery.join('-')
}

alert(getLotteryNumber())