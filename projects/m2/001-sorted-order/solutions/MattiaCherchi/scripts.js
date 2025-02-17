const orderNumber = () => {

    let userNumber;
    const arrNumber = [];

    while (userNumber != 0) {

        userNumber = parseInt(prompt('Enter a number (0 to quit)'));
        if (/^[-+]?\d*$/.test(userNumber)) {

            arrNumber.push(userNumber);
        } else {
            alert('Error! Enter a number')
        }

    }

    arrNumber.pop();

    arrNumber.sort((a, b) => a - b);

    return alert(arrNumber.join('\n'));
}


orderNumber();