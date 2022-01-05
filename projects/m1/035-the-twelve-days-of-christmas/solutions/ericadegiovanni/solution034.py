
def cardinal_to_ordinal(n):

    # write a function that takes an integer as its only parameter
    # return a string containing the appropriate English ordinal number
    # return an empty string if 1 > n > 12

    if n == 1:
        return 'first'
    elif n == 2:
        return 'second'
    elif n == 3:
        return 'third'
    elif n == 4:
        return 'fourth'
    elif n == 5:
        return 'fifth'
    elif n == 6:
        return 'sixth'
    elif n == 7:
        return 'seventh'
    elif n == 8:
        return 'eighth'
    elif n == 9:
        return 'ninth'
    elif n == 10:
        return 'tenth'
    elif n == 11:
        return 'eleventh'
    elif n == 12:
        return 'twelfth'
    else:    
        return ' '
    
def main():

    # Include a main program that demonstrates your function by displaying
    # each integer from 1 to 12 and its ordinal number. 

    for n in range(1,13):
        print(f'The ordinal English word for {n} is: {cardinal_to_ordinal(n)}.')
        
# Your main program should only run when your file has not been imported 
# into another program.    
if __name__ == "__main__":
    main()


