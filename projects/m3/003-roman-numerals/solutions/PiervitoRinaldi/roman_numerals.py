def roman_to_decimal(roman_number):
    roman_number = roman_number.upper()

    roman_values = {
        'M': 1000,'D': 500,
        'C': 100, 'L': 50, 
        'X': 10, 'V': 5, 'I':1
        }

    # The first and the second conditions rapresent the 'base cases'.
    if len(roman_number) == 1:
        return roman_values[roman_number]

    elif len(roman_number) == 2:
        if roman_values[roman_number[1]] > roman_values[roman_number[0]]:
            value = roman_values[roman_number[1]] - roman_values[roman_number[0]]
            return value
        else:
            value = roman_values[roman_number[1]] + roman_values[roman_number[0]]
            return value

    # The third verify if the next charactaer is greater than the first and performs the subtraction, or consider only one value.
    # The function call itself recursively, but will remove removes already processed cases
    elif len(roman_number) > 2:
        if roman_values[roman_number[1]] > roman_values[roman_number[0]]:
            value = roman_values[roman_number[1]] - roman_values[roman_number[0]]
            return value + roman_to_decimal(roman_number[2:])
        else:
            value = roman_values[roman_number[0]]
            return value + roman_to_decimal(roman_number[1:])

def main():
    roman_number = input('Enter roman number: ')
    print(roman_to_decimal(roman_number))

if __name__ == "__main__":
    main()
