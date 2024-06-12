const userString = prompt('Enter a message').toUpperCase();

const messageNumber = (string) => {

    let keyboard = {
        1: ['.', ',', '?', '!', ':'],
        2: ['A', 'B', 'C'],
        3: ['D', 'E', 'F'],
        4: ['G', 'H', 'I'],
        5: ['J', 'K', 'L'],
        6: ['M', 'N', 'O'],
        7: ['P', 'Q', 'R', 'S'],
        8: ['T', 'U', 'V'],
        9: ['W', 'X', 'Y', 'Z'],
        0: [' '],
    }

    const result = [];

    for (let i = 0; i < string.length; i++) {

        for (let key in keyboard) {

            if (keyboard[key].includes(string[i])) {

                let index = keyboard[key].indexOf(string[i]) + 1

                result.push(key.repeat(index))

            }
        }
    }

    return result.join('-')
}


if (/^[a-zA-Z\s.,?!:]+$/.test(userString)) {
    alert(`to write the following message: ${userString}\nyou have to press the keys in the following way:\n ${messageNumber(userString)}`);
} else {
    alert('Error! you can only enter letters spaces and the following special characters [.,?!:]')
}
