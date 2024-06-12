let  month = checkMonth(prompt('How many days does the month have?', 'write the name of the month here'));
let isLeap = (year) => new Date(year, 1, 29).getDate() === 29;
let actualYear = new Date().getFullYear();

function checkMonth (i){
    if(i === '' || i === null || isNaN(i) === false){
        return false;
    };

    if(i.match(/[a-z]/i)){
        return i.toUpperCase();
    };
};

switch(month){
    case 'JANUARY': 
    case 'MARCH': 
    case 'MAY':
    case 'JULY':
    case 'AUGUST':
    case 'OCTOBER':
    case 'DECEMBER':
        alert(`${month} has 31 days.`);
        break;
    case 'FEBRUARY':
        isLeap(actualYear) ? alert(`${month} has 29 days.`) : alert(`${month} has 28 days.`);
        break;
    case 'APRIL': 
    case 'JUNE':
    case 'SEPTEMBER':
    case 'NOVEMBER':
        alert(`${month} has 30 days.`);
        break;
    default:
        alert('Something went wrong, you entered the month incorrectly ... try again');
        break;
};

