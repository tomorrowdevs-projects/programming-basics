# defines a function that converts hexadecimals to decimals
def hex2int(user_input):

# converts user's string in a list
    user_input = list(user_input)

# reverts list's items
    user_input.reverse()

# checks if hexadecimal value is a valid one
    validation_list = ['A', 'B', 'C', 'D', 'E', 'F', 'a', 'b', 'c', 'd', 'e', 'f', '0', '1', '2', '3', '4', '5', '6', '7', '8', '9']
    
    for i in user_input:
        if i not in validation_list:
            print('Error, not valid value')
            quit()
            
# turns the letters into decimal number       
    for i in range(len(user_input)):
        if user_input[i] == 'a' or user_input[i] == 'A':
            user_input[i] = '10'
        elif user_input[i] == 'b' or user_input[i] == 'B':
            user_input[i] = '11'
        elif user_input[i] == 'c' or user_input[i] == 'C':
            user_input[i] = '12'
        elif user_input[i] == 'd' or user_input[i] == 'D':
            user_input[i] = '13'
        elif user_input[i] == 'e' or user_input[i] == 'E':
            user_input[i] = '14'
        elif user_input[i] == 'f' or user_input[i] == 'F':
            user_input[i] = '15'

# computes the items multiplying each one from the first by 16 with power of 0, and  so on, increasing the power by one every time
    espo = 0
    for i in range(len(user_input)):
        user_input[i] = int(user_input[i])
        user_input[i] = user_input[i] * (16**espo)
        espo += 1
# sums all the elements
    user_input = sum(user_input)
# separates thousands
    user_input = f'{user_input:,}'
# returs the number converted 
    return user_input

print(hex2int('7FFFFFF'))


# defines a function that converts decimal numbers from 0 to 15 in hexadecimal numbers
def int2hex(number):

# creates a list with all the numbers to convert, returns the given number if it is between 0 and 9, convert in letter if between 10 and 15 and returns it, or displays an error message if it is out of range.
    integer = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]

    if not number in integer:
        print('Error,out of range!')
        quit()
    elif number in integer[0:9]:
        return number
    elif number == integer[10]:
        return 'A'
    elif number == integer[11]:
        return 'B'
    elif number == integer[12]:
        return 'C'
    elif number == integer[13]:
        return 'D'
    elif number == integer[14]:
        return 'E'
    elif number == integer[15]:
        return 'F'

print(int2hex(11))

