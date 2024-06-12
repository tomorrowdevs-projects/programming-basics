def rom_to_int(n):
    roman_numbers = {"M": 1000, "D": 500, "C": 100, "L": 50, "X": 10, "V": 5, "I": 1}
    if n == "":
        return 0
    elif len(n) == 1:
        return roman_numbers[n[0]]
    elif roman_numbers[n[0]] < roman_numbers[n[1]]:
        return roman_numbers[n[1]] - roman_numbers[n[0]] + rom_to_int(n[2:])
    else:
        return roman_numbers[n[0]] + rom_to_int(n[1:])
    
if __name__ == "__main__":
    user_number = input("Enter a Roman numeral to convert to integer: ")
    print("The value of the Roman numeral {} is {}.".format(user_number, rom_to_int(user_number)))