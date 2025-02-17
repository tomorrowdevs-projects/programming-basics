let userNumber = prompt('Write (HEX) for Hex to Int \\ Write (INT) fo Int to Hex').toLowerCase();

function hex2Int(hex) {
    return parseInt(hex, 16);
}

function int2Hex(int) {
    return int.toString(16).toUpperCase();
}

if (userNumber == 'hex') {
    let hex = prompt('Enter a Hexaecimal number');

    if (/^[0-9A-Fa-f]+$/.test(hex)) {
        alert(`your HEX number ${hex} in the decimal system is ${hex2Int(hex)}`)
    } else {
        alert('Error! Please enter a correct Hexadecimal number')
    }

} else if (userNumber == 'int') {
    let int = parseInt(prompt('Enter a integer decimal number from 0 to 15'));

    if (/^([0-9]|1[0-5])$/.test(int)) {
        alert(`your INT number ${int} in the Hexadecimal system is ${int2Hex(int)}`)
    } else {
        alert('Error! Please enter a correct decimal number')
    }

} else {
    alert('Error! The program only works if you enter HEX or INT')
}
