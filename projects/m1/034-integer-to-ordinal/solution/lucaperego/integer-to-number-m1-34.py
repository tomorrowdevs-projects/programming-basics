

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
    number = int(input("Enter a number from 1 to 12: "))
    
    print(f"If the Number is: {number}, then the Ordinal is: {ordinal_number(number)}")