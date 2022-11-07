# Convert an Integer to Its Ordinal Number
def integer_to_ordinal(integer):
    if 1 <= integer <= 12:
        if integer == 1: ordinal_number = "First"
        elif integer == 2: ordinal_number = "Second"
        elif integer == 3: ordinal_number = "Third"
        elif integer == 4: ordinal_number = "Fourth"
        elif integer == 5: ordinal_number = "Fifth"
        elif integer == 6: ordinal_number = "Sixth"
        elif integer == 7: ordinal_number = "Seventh"
        elif integer == 8: ordinal_number = "Eighth"
        elif integer == 9: ordinal_number = "Ninth"
        elif integer == 10: ordinal_number = "Tenth"
        elif integer == 11: ordinal_number = "Eleventh"
        elif integer == 12: ordinal_number = "Twelfth"
        return ordinal_number
    else: return ""

def main():
    number = 1
    while number <= 12:
        print("Integer: {}   Ordinal number: {}".format(number, integer_to_ordinal(number)))
        number += 1

if __name__ == "__main__":
    main()