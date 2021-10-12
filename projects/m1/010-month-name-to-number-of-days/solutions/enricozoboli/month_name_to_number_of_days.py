user_month = input("Please enter the month: ")

month_31_days = "gmod"
month_30_days = "ajsn"

if len(user_month ) >= 4 :
    if (user_month[0].lower() in month_31_days or user_month.lower() == 'july' or 
    user_month[0:4].lower() == 'augu'):
        print(f"{user_month.capitalize()} has 31 days.")

    elif user_month[0].lower() in month_30_days:
        print(f"{user_month.capitalize()} has 30 days.")

    elif user_month[0].lower() == 'f':
        print(f"{user_month.capitalize()} has 28 or 29 days(in leap years).") 

    else:
        print("Wrong value") 

else:
    print("Please enter at least four characters.")