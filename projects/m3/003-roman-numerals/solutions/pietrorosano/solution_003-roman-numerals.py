# Create a recursive function that converts a Roman numeral to an integer.

# Your function should process one or two characters at the beginning of the string,
# and then call itself recursively on all of the unprocessed characters.
# Use an empty string, which has the value 0, for the base case.

# In addition, write a main program that reads a Roman numeral from the user and displays its value.

print("\nEnter a roman number")
inp = input()

def roman_num_to_int(rom, count=0):
    romans_list = list(rom)
    roman_numbers = {"M":1000, "D":500, "C":100, "L":50, "X":10, "V":5, "I":1}
    
    if len(romans_list) < 2:
        count += roman_numbers[romans_list[0]]
        return count
    elif len(romans_list) >= 2 and roman_numbers[romans_list[0]] < roman_numbers[romans_list[1]]:
        value = roman_numbers[romans_list[1]] - roman_numbers[romans_list[0]]
        count += value
        del romans_list[:2]
    else:
        count += roman_numbers[romans_list[0]]
        del romans_list[0]
    
    return roman_num_to_int(romans_list, count)
    
    

print("Your roman number's integer is: " + str(roman_num_to_int(inp)))

