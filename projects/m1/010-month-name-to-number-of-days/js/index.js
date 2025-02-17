
let daysNumber = new Date().getFullYear() % 4 == 0 ? 366 : 365;

let monthInput = prompt('Please enter a month:');
monthInput =  monthInput.toLowerCase();

switch (monthInput) {

        case "april":
        case "june":
        case "september":
        case "november":
            alert(monthInput + " have 30 days!");
            break;

        case "january":
        case "march":
        case "may":
        case "july":
        case "august":
        case "october":
        case "december":     
            alert(monthInput + " have 31 days!");
            break;

        case "february":
            if (daysNumber == 365) {
                alert("February usually have 28 days, but on a leap year the number of days is 29.\nThis is not a leap year, so the number of days is 28.");

            } else {
                alert("February usually have 28 days, but on a leap year the number of days is 29.\nThis is a leap year, so the number of days is 29.");

            }
            break;

        default:
            alert("Please, enter a valid month name!");
            location.reload();

}