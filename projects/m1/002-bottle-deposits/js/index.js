const totalRefund = () => {

    let smallContainer = Number(prompt('insert the number of small containers: '));
    let bigContainer = Number(prompt('insert the number of big containers: '));
    while ( isNaN(smallContainer) || isNaN(bigContainer)) {
        alert('insert valid numbers')
        smallContainer = Number(prompt('insert the number of small containers: '));
        bigContainer = Number(prompt('insert the number of big containers: '));
    }

    const deposit = (smallContainer * 0.1) + (bigContainer * 0.25)

    console.log(`you receive a total amount of ${deposit} dollars`);
}

totalRefund();