def ordinal_number(integer_number):
    if integer_number == 1:
        return "first"
    elif integer_number == 2:
        return "second"
    elif integer_number == 3:
        return "third"
    elif integer_number == 4:
        return "fourth"
    elif integer_number == 5:
        return "fifth"
    elif integer_number == 6:
        return "sixth"
    elif integer_number == 7:
        return "seventh"
    elif integer_number == 8:
        return "eighth"
    elif integer_number == 9:
        return "ninth"
    elif integer_number == 10:
        return "tenth"
    elif integer_number == 11:
        return "eleventh"
    elif integer_number == 12:
        return "twelfth"
    else:
        return ""

if __name__=="__main__":
    for i in range(1,13):
        print("{} --> ".format(i),end="")
        print(ordinal_number(i))