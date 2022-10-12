def positive_decimal_to_binary(q):
    #check if input is negative or positive
    if q < 0:
        return 'Enter a NON-NEGATIVE number.'
    else:
        #calculate the remainder and store in q a new result
        r = q % 2
        q //= 2
        #if q is not 0, call again the function and bring along the remainder variable
        #once q is 0, break the recursion and return the sum of result and remainder variable
        if q != 0:
            return positive_decimal_to_binary(q) + str(r)
        else:
            return result + str(r)

if __name__=='__main__':
    result = ''
    q = int(input('Enter a positive number to covert: '))
    print('The binary number of', q, 'is:',positive_decimal_to_binary(q))