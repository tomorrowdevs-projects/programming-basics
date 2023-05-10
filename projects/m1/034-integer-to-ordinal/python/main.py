def decimal_to_ordinal(number):
    """
    This is a function that transforms decimal numbers into ordinal numbers.

    Args:
        number (int): A number from 1 to 12

    Returns:
        ordinal_number (str): A string that represents the number in ordinal form
    """
    #create a dictionary with int and corrispondent ordinal number
    ordinal_numbers = {
        1: 'first',
        2: 'second',
        3: 'third',
        4: 'fourth',
        5: 'fifth',
        6: 'sixth',
        7: 'seventh',
        8: 'eighth',
        9: 'ninth',
        10: 'tenth',
        11: 'eleventh',
        12: 'twelfth'
    }
    #if number in ordinal i create a variable that return the value
    if number in ordinal_numbers:
        ordinal_number = ordinal_numbers[number]
        return ordinal_number
    else:
        print(f"{number} is not a valid input for decimal_to_ordinal() function.")

if __name__ == '__main__':
    number = int(input("Insert a number from 1 to 12: "))
    ordinal_number = decimal_to_ordinal(number)
    if ordinal_number:
        print(f"The ordinal form of {number} is {ordinal_number}")