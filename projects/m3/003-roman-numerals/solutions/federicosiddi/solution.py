roman_dict = {
    "M": 1000,
    "D": 500,
    "C": 100,
    "L": 50,
    "X": 10,
    "V": 5,
    "I": 1,
}

def roman_to_int(string, count=0):
    """
    Transform a roman numeral string into a decimal number
    :param string: Roman numeral string
    :param count: Accumulator for the sum of result, leave it to 0
    :return: Decimal number int type
    """

    roman_list = [char.upper() for char in string]

    # Base Case
    if len(string) < 2:
        count += roman_dict[roman_list[0]]
        return count

    # Recursive Case

    # If the first numeral of the string is lower than the second,
    # subtracts the value of the second numeral from the first,
    # then deletes the first two elements of the string
    elif roman_dict[roman_list[0]] < roman_dict[roman_list[1]]:
        value = roman_dict[roman_list[1]] - (roman_dict[roman_list[0]])
        count += value
        del (roman_list[:2])

    # If the first numeral of the string is greater or equal than the second,
    # adds the value of the first numeral to count and deletes the first element of the string
    else:
        count += roman_dict[roman_list[0]]
        del (roman_list[0])

    # Returns the list without the elements deleted
    return roman_to_int(roman_list, count)


def main():
    usr_input = input("Please enter a valid roman numeral: \n")
    result = roman_to_int(usr_input)
    print(f"{usr_input.upper()} in decimal numbers is: {result}")

if __name__ == "__main__":
    main()