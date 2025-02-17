def conversions(cardinal):
    #set up function with list of ordinal numbers
    #else statement: if the int input is outside of range, a blank line is returned
    #otherwise the result (num) is obtained from the ordinal list using the cardinal var as index - 1 to get the exact position
    ordinal = ['First', 'Second', 'Third', 'Fourth', 'Fifth', 'Sixth', 'Seventh', 'Eighth', 'Ninth', 'Tenth', 'Eleventh', 'Twelfth']
    if 1 <= cardinal <= 12:
        num = ordinal[cardinal -1]
        print('The ordinal number of the cardinal number ' + str(cardinal) + ' is:  ' + str(num))
    else:
        return print(" ")

#get input from user and call function with its parameter
cardinal = int(input('Enter an integer between 1 to 12:  '))
conversions(cardinal)