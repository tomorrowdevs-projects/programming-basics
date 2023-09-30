# This is the solution for exercise 034 used in exercise 035 to import the int_to_ord function

# The int_to_ord function takes the first 12 integers and converts them to their respective ordinals
def int_to_ord(integer):
    if 1 <= integer <= 12:
        if integer == 1: ordinal_number = "first"
        elif integer == 2: ordinal_number = "second"
        elif integer == 3: ordinal_number = "third"
        elif integer == 4: ordinal_number = "fourth"
        elif integer == 5: ordinal_number = "fifth"
        elif integer == 6: ordinal_number = "sixth"
        elif integer == 7: ordinal_number = "seventh"
        elif integer == 8: ordinal_number = "eighth"
        elif integer == 9: ordinal_number = "ninth"
        elif integer == 10: ordinal_number = "tenth"
        elif integer == 11: ordinal_number = "eleventh"
        elif integer == 12: ordinal_number = "twelfth"
        return ordinal_number
    else: return ""

def main():
    number = 1
    while number <= 12:
        print("Integer: {}   Ordinal number: {}".format(number, int_to_ord(number)))
        number += 1

if __name__ == "__main__":
    main()