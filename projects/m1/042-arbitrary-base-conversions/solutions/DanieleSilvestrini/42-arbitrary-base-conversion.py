
# defines a function that converts to a decimal number from another base between 2 and 16
def from_base_x_to_base_10(number, base):
# converts number in list
    number = list(number)
# reverses the list
    number.reverse()
# converts letter in number if necessary
    if base == 16:
        for i in range(len(number)):
            if number[i] == 'a' or number[i] == 'A':
                number[i] = '10'
            elif number[i] == 'b' or number[i] == 'B':
                number[i] = '11'
            elif number[i] == 'c' or number[i] == 'C':
                number[i] = '12'
            elif number[i] == 'd' or number[i] == 'D':
                number[i] = '13'
            elif number[i] == 'e' or number[i] == 'E':
                number[i] = '14'
            elif number[i] == 'f' or number[i] == 'F':
                number[i] = '15'

    if base == 15:
        for i in range(len(number)):
            if number[i] == 'a' or number[i] == 'A':
                number[i] = '10'
            elif number[i] == 'b' or number[i] == 'B':
                number[i] = '11'
            elif number[i] == 'c' or number[i] == 'C':
                number[i] = '12'
            elif number[i] == 'd' or number[i] == 'D':
                number[i] = '13'
            elif number[i] == 'e' or number[i] == 'E':
                number[i] = '14'
            
    if base == 14:
        for i in range(len(number)):
            if number[i] == 'a' or number[i] == 'A':
                number[i] = '10'
            elif number[i] == 'b' or number[i] == 'B':
                number[i] = '11'
            elif number[i] == 'c' or number[i] == 'C':
                number[i] = '12'
            elif number[i] == 'd' or number[i] == 'D':
                number[i] = '13'

    if base == 13:
        for i in range(len(number)):
            if number[i] == 'a' or number[i] == 'A':
                number[i] = '10'
            elif number[i] == 'b' or number[i] == 'B':
                number[i] = '11'
            elif number[i] == 'c' or number[i] == 'C':
                number[i] = '12'

    if base == 12:
        for i in range(len(number)):
            if number[i] == 'a' or number[i] == 'A':
                number[i] = '10'
            elif number[i] == 'b' or number[i] == 'B':
                number[i] = '11'
                  
    if base == 11:
        for i in range(len(number)):
            if number[i] == 'a' or number[i] == 'A':
                number[i] = '10'
            
# multiply each list item by the number of the base in power of 0 for the first step and adding 1 to the esponent every step
    espo = 0
    for i in range(len(number)):
        number[i] = int(number[i])
        number[i] = number[i] * (base**espo)
        espo += 1

#sums all the number of the list and so obtains the number converted
    number = sum(number)

# return the number converted
    return number


# defines a function that convert a decimal number to another base between 2 and 16

def from_base_10_to_base_x(number, base):
# converts number in list
    number = int(number)
# creates an empty list where store value
    result = []
# loops dividing the number by base and stores rest each time in the empty list "result"
    while True:
        rest = number % base
        result.append(rest)
        number = int(number / base)
        if number == 0:
            break
# reverses the list
    result.reverse()
#converts each  list items into string type
    result = [str(n) for n in result]
#converts numbers to letters if necessary to display a correct result
    if base == 11:
            for i in range(len(result)):
                if result[i] == '10':
                    result[i] = 'A'

    if base == 12:
            for i in range(len(result)):
                if result[i] == '10':
                    result[i] = 'A'   
                elif result[i] == '11':
                    result[i] = 'B'

    if base == 13:
            for i in range(len(result)):
                if result[i] == '10':
                    result[i] = 'A'   
                elif result[i] == '11':
                    result[i] = 'B'
                elif result[i] == '12':
                    result[i] = 'C'

    if base == 14:
            for i in range(len(result)):
                if result[i] == '10':
                    result[i] = 'A'   
                elif result[i] == '11':
                    result[i] = 'B'
                elif result[i] == '12':
                    result[i] = 'C'
                elif result[i] == '13':
                    result[i] = 'D'

    if base == 15:
            for i in range(len(result)):
                if result[i] == '10':
                    result[i] = 'A'   
                elif result[i] == '11':
                    result[i] = 'B'
                elif result[i] == '12':
                    result[i] = 'C'
                elif result[i] == '13':
                    result[i] = 'D'
                elif result[i] == '14':
                    result[i] = 'E'

    if base == 16:
            for i in range(len(result)):
                if result[i] == '10':
                    result[i] = 'A'   
                elif result[i] == '11':
                    result[i] = 'B'
                elif result[i] == '12':
                    result[i] = 'C'
                elif result[i] == '13':
                    result[i] = 'D'
                elif result[i] == '14':
                    result[i] = 'E'
                elif result[i] == '15':
                    result[i] = 'F'
# joins the element of list in a string
    result = ''.join(result)
# returns the string
    return result


# defines a functions that converts a value from a base to another
def from_base_x_to_base_y(first_number, first_base, convert_to_base):
# checks that the base of the number to convert is between 2 and 16 and eventually return an error message, if the base is equal to 10 in order to display a correct result 
    if 2 > first_base > 16:
        return ('error, insert a base from 2 to 16')
    elif first_base != 10:
        first = (from_base_x_to_base_10(first_number,first_base))
        return from_base_10_to_base_x(first, convert_to_base)
    else:
        return(from_base_10_to_base_x(first_number, convert_to_base))

# main program that ask to user values and print to screen the result        
def main():
    first_number = input('Insert number to convert: ')
    first_base = int(input('Insert base of the number: '))
    convert_to_base = int(input('Insert the base you want: '))
    return print(from_base_x_to_base_y(first_number, first_base, convert_to_base))

main()

 
