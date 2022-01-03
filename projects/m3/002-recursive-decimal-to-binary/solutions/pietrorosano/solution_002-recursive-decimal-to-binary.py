# Write a recursive function that converts a non-negative decimal number to binary.

# Treat 0 and 1 as base cases which return a string containing the appropriate digit.

# For all other positive integers, n, you should compute the next digit using the remainder operator and then make a
# recursive call to compute the digits of n // 2.

# Finally, you should concatenate the result of the recursive call (which will be a string) and the next digit
# (which you will need to convert to a string) and return this string as the result of the function.

# Write a main program that uses your recursive function to convert a non-negative integer entered by the user from decimal
# to binary. Your program should display an appropriate error message if the user enters a negative value.


print("\nEnter an integer")
user_input = input()
binary = ""

def decimal_to_binary(n, s):
    
    if int(n) == 0:
        result = s + "0"
        return result[::-1]
    elif int(n) == 1:
        result = s + "1"
        return result[::-1]
    elif int(n) < 0:
        raise ValueError("Enter a positive integer for convert it in binary.")
    else:
        result = int(n) // 2
        s += str(int(n) % 2)
        return decimal_to_binary(result, s)
    
print(decimal_to_binary(user_input, binary))