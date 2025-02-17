minutes = int(input("Number of minutes used this month: "))
messages = int(input("Number of text messages used this month: "))

if minutes <= 50 and messages <= 50:
    total_bill = 15.44 + (15.44 * 0.05)
    print("Your base charge is € 15.00")
    print("The 911 fee is € 0.44")
    print("5% taxes")
    print(("The total bill amount is € {:.2f}") .format(total_bill))

elif minutes > 50 or messages > 50:
    if minutes > 50 and messages <= 50:
        extra_minutes = minutes - 50
        total_bill = 15.44 + 0.25*extra_minutes + ((15.44 + 0.25*extra_minutes)*0.05)
        print("The base charge is € 15.00")
        print(("Additional minutes charge is € {}") .format(0.25*extra_minutes))
        print("The 911 fee is € 0.44")
        print("5% taxes")
        print(("The total bill amount is € {:.2f}") .format(total_bill))

    elif minutes <= 50 and messages > 50:
        extra_messages = messages - 50
        total_bill = 15.44 + 0.15*extra_messages + ((15.44 + 0.15*extra_messages)*0.05)
        print("The base charge is € 15.00")
        print(("Additional messages charge is € {}") .format(0.15*extra_messages))
        print("The 911 fee is € 0.44")
        print("5% taxes")
        print(("The total bill amount is € {:.2f}") .format(total_bill))

    else: 
        extra_minutes = minutes - 50
        extra_messages = messages - 50
        total_bill = 15.44 + 0.25*extra_minutes + 0.15*extra_messages + ((15.44 + 0.25*extra_minutes + 0.15*extra_messages)*0.05)
        print("The base charge is € 15.00")
        print(("Additional minutes charge is € {}") .format(0.25*extra_minutes))
        print(("Additional messages charge is € {}") .format(0.15*extra_messages))
        print("The 911 fee is € 0.44")
        print("5% taxes")
        print(("The total bill amount is € {:.2f}") .format(total_bill))

        


