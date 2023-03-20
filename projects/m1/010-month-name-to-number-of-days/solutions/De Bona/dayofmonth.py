number=input("What's the month? ")
match number:
    case "January":
        print("The month has 31 days.")
    case "Febrary":
        print("The month has 28 days, or 29 on leap year")
    case "March":
        print("The month has 31 days")
    case "April":
        print("The month has 30 days")
    case "May":
        print("The month has 31 days")
    case "June":
        print("The month has 30 days")
    case"July":
        print("The month has 31 days")
    case "August":
        print("The month has 31 days")
    case "September":
        print("The month has 30 days")
    case "October":
        print("The month has 31 days")
    case "November":
        print("The month has 30 days")
    case "December":
        print("The month has 31 days")

    case _:
        print("sorry")