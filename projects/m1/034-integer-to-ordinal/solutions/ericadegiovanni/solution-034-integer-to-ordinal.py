
def cardinal_to_ordinal(n):

    # write a function that takes an integer as its only parameter
    # return a string containing the appropriate English ordinal number
    # return an empty string if 1 > n > 12

    if n == 1:
        return 'First'
    elif n == 2:
        return 'Second'
    elif n == 3:
        return 'Third'
    elif n == 4:
        return 'Fourth'
    elif n == 5:
        return 'Fifth'
    elif n == 6:
        return 'Sixth'
    elif n == 7:
        return 'Seventh'
    elif n == 8:
        return 'Eighth'
    elif n == 9:
        return 'Ninth'
    elif n == 10:
        return 'Tenth'
    elif n == 11:
        return 'Eleventh'
    elif n == 12:
        return 'Twelfth'
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


