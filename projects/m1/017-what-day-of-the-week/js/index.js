
const YEARINPUT = parseInt(prompt("Please, enter a year in the format YYYY:"));

let dayOfWeek = ((YEARINPUT + Math.floor((YEARINPUT - 1) / 4) - Math.floor((YEARINPUT - 1) / 100) + Math.floor((YEARINPUT - 1) / 400)) % 7).toString();


switch (dayOfWeek) {
    case "0":
        alert("It was/will be Sunday, on January 1 " + YEARINPUT + "!");
        break;
    case "1":
        alert("It was/will be Monday, on January 1 " + YEARINPUT + "!");
        break;
    case "2":
        alert("It was/will be Tuesday, on January 1 " + YEARINPUT + "!");
        break;
    case "3":
        alert("It was/will be/will be Wednesday, on January 1 " + YEARINPUT + "!");
        break;
    case "4":
        alert("It was/will be Thursday, on January 1 " + YEARINPUT + "!");
        break;
    case "5":
        alert("It was/will be Friday, on January 1 " + YEARINPUT + "!");
        break;
    case "6":
        alert("It was/will be Saturday, on January 1 " + YEARINPUT + "!");
        break;
    default:
        alert("Please, enter a valid input!");
        location.reload();
        break;
}