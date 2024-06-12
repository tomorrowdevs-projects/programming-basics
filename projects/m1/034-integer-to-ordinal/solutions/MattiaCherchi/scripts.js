let userInt = parseInt(prompt('Enter an integer between 1 and 12(inclusive) '));
const correctInt = /^[0-9]+$/.test(userInt);

function checkUserInt(userInt) {
    if (correctInt && userInt >= 1 && userInt <= 12) {
        alert(`the ordinal of ${userInt} is ${printNumber(userInt)}`);
    } else {
        alert('Error!Enter a correct integer')
    }
}

checkUserInt(userInt);

function printNumber(userInt) {
    let result = '';
    if (userInt == 12) {
        result += (`${userInt}th`);
    } else if (userInt % 10 == 1) {
        result += (`${userInt}st`);
    } else if (userInt % 10 == 2) {
        result += (`${userInt}nd`);
    } else if (userInt % 10 == 3) {
        result += (`${userInt}rd`);
    } else {
        result += (`${userInt}th`);
    }
    return result
}





// function printNumber (userInt){
//     let result;
//     switch(userInt){
//         case 1 :
//         result = 'Firist';
//         break;
//         case 2 :
//         result = 'second'
//         break;
//         case 3:
//         result = 'third';
//         break;
//         case 4:
//         result = 'fourth'
//         break;
//         case 5:
//         result = 'fifth';
//         break;
//         case 6:
//         result = 'sixth'
//         break;
//         case 7:
//         result = 'seventh';
//         break;
//         case 8:
//         result = 'eighth'
//         break;
//         case 9:
//             result = 'ninth'
//         break;
//         case 10:
//             result = 'tenth'
//         break;
//         case 11:
//             result = 'eleventh'
//         break;
//         case 12:
//             result = 'twelfth'
//         break;
//     }
//     return result;
// }

