
const userNumber = prompt('Enter a integer between 0 and 999 ')

const convertNumber = (number) => {

    const numberUnder20 = {
        0: '',
        1: 'one',
        2: 'two',
        3: 'three',
        4: 'four',
        5: 'five',
        6: 'six',
        7: 'seven',
        8: 'eight',
        9: 'nine',
        10: 'teen',
        11: 'eleven',
        12: 'twelve',
        13: 'thirteen',
        14: 'fourteen',
        15: 'fifteen',
        16: 'sixteen',
        17: 'seventeen',
        18: 'eighteen',
        19: 'nineteen'
    }

    const numberOver20 = {
        20: "twenty",
        30: "thirty",
        40: "forty",
        50: "fifty",
        60: "sixty",
        70: "seventy",
        80: "eighty",
        90: "ninety"
    }

    let message = '';

    if (number == 0) {

        message += 'Zero'

    } else if (number <= 19) {

        message += numberUnder20[number];

    } else if (number < 100) {

        message += numberOver20[number[0] * 10] + ' ' + numberUnder20[number[1]];

    } else if (number < 1000) {

        if (number[1] == 0) {
            message += numberUnder20[number[0]] + ' ' + 'hundred' + ' ' + numberUnder20[number[2]];
        } else if (number[1] == 1) {

            message += numberUnder20[number[0]] + ' ' + 'hundred' + ' ' + numberUnder20[number.slice(1, 3)];
        } else {
            message += numberUnder20[number[0]] + ' ' + 'hundred' + ' ' + numberOver20[number[1] * 10] + numberUnder20[number[2]];
        }

    }


    return alert(`${message}`)
}


convertNumber(userNumber);

