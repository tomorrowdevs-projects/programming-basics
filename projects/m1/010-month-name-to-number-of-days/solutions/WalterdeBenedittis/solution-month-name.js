let insertMonth = prompt("Please insert the name of the month, I'll tell you the number of its days!").toLowerCase();

      switch (insertMonth) {
        case "april":
        case "june":
        case "september":
        case "november":
        alert("This month has 30 days!!");
        break;
        case "january":
        case "march":
        case "may":
        case "july":
        case "august":
        case "october":
        case "december":
            alert("This month has 31 days!!");
            break;
        case "february":
            alert("This month has 28 or 29 days");
            break;
        default: 
            alert("This is not a month!!"); 
    }