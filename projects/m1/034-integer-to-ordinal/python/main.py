def ordinal_number(integer_number):
    if integer_number == 1:
        return "First"
    elif integer_number == 2:
        return "Second"
    elif integer_number == 3:
        return "Third"
    elif integer_number == 4:
        return "Fourth"
    elif integer_number == 5:
        return "Fifth"
    elif integer_number == 6:
        return "Sixth"
    elif integer_number == 7:
        return "Seventh"
    elif integer_number == 8:
        return "Eighth"
    elif integer_number == 9:
        return "Ninth"
    elif integer_number == 10:
        return "Tenth"
    elif integer_number == 11:
        return "Eleventh"
    elif integer_number == 12:
        return "Twelfth"
    else:
        return ""

if __name__=="__main__":
    for i in range(1,13):
        print("{} --> ".format(i),end="")
        print(ordinal_number(i))