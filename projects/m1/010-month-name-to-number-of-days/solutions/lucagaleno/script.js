// month name to number of days

let monthInput = prompt('Enter the name of the month: ', '');

/* // con una array controllo se il mese inserito è corretto, in questo caso non serve
let months = ['January', 'February', 'March', 'April', 'Mai', 
'June', 'July', 'August', 'September', 'October', 'November', 'December'];

if (months.indexOf(monthInput)!= -1){
    numberMonth = months.indexOf(monthInput);
};
*/

switch (monthInput) {
    case 'February':
        console.log(monthInput + ' has the follow days: 28 or 29');
        break;

    case 'January':
    case 'March':
    case 'Mai':
    case 'July':
    case 'August':
    case 'October':
    case 'December':
        console.log(monthInput + ' has the follow days: 31');
        break;
    case 'April':
    case 'June':
    case 'September':
    case 'November':
        console.log(monthInput + ' has the follow days: 30');
        break;
    default:
        console.log('Please enter correctly the month. \nAttention: the first letter has to be capital!')
};
