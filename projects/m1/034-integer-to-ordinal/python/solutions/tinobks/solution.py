def ordinal_number(number):
    if number == 1:
        ordinal = "First"
    elif number == 2:
        ordinal = "Second"
    elif number == 3:
        ordinal = "Third"
    elif number == 4:
        ordinal = "Fourth"
    elif number == 5:
        ordinal = "Fifth"
    elif number == 6:
        ordinal = "Sixth"
    elif number == 7:
        ordinal = "Seventh"
    elif number == 8:
        ordinal = "Eight"
    elif number == 9:
        ordinal = "Ninth"
    elif number == 10:
        ordinal = "Tenth"
    elif number == 11:
        ordinal = "Eleventh"
    elif number == 12:
        ordinal = "Twelfth"
    else:
        ordinal = " "
    return ordinal

if __name__ == "__main__":
    user_number = int(input("Enter an integer from 1 to 12: "))
    ordinal = ordinal_number(user_number)
    print(ordinal)