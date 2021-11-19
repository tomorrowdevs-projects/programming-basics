def roman_calc(s):
    """
    Takes a roman number from the user and return the sum in a decimal form 
    assuming that a correct number is entered by roman standars. 
    If the first element of the string is lesser than the second the function
    process the subtraction, add the difference to the sum of all the 
    following elements and subtract the value of the second element which is 
    added in the recursion back from the base case. If the first element is 
    grater than the second the function simply add every element's values.
    """
    roman_values = {
        'M': 1000,'D': 500,'C': 100,
        'L': 50, 'X': 10, 'V': 5, 'I':1
        }
    if len(s) == 1:
        return roman_values[s[0]]
    return  roman_calc(s[1:]) + (roman_values[s[1]] - roman_values[s[0]]) - \
        roman_values[s[1]]  if roman_values[s[0]] < roman_values[s[1]] \
        else roman_values[s[0]] + roman_calc(s[1:])

def main():
    while True:
        usr_roman_number = input("Enter a valid roman number(q for exit): ")
        if usr_roman_number == "q":
            break
        print(roman_calc(usr_roman_number.upper()))

if __name__ == "__main__":
    main()

