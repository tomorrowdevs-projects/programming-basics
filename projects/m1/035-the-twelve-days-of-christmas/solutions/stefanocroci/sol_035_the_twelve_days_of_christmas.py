# I've imported my solution to ex 034 copying it in the same directory because I don't 
# find the way to import it otherwise since its original directory name starts with a number.
from sol_034_integer_to_ordinal import ordinalnumber

# This function takes a number as its parameter and returns the first line of the relative verse 
# using ordinalnumber function from ex. 034
def first_text(number):
    ordinal = ordinalnumber(number)
    return 'On the ' + ordinal.lower() + ' day of Christmas my true love sent to me:'

# This function takes a number as its parameter and returns the second line of the relative verse 
# with one exception (in order to make easier to compose the entire verse):
# to retrive verse 1 it's necessary to pass 0 as parameter.
def second_text(number):
    if number == 0:
        text = 'A partridge in a pear tree.'
    elif number == 1:
        text = 'And a partridge in a pear tree.'
    elif number == 2:
        text = 'Two turtle doves,'
    elif number == 3:
        text = 'Three French hens,'
    elif number == 4:
        text = 'Four calling birds,'
    elif number == 5:
        text = 'Five gold rings,'
    elif number == 6:
        text = 'Six geese a-laying,'
    elif number == 7:
        text = 'Seven swans a-swimming,'
    elif number == 8:
        text = 'Eight maids a-milking,'
    elif number == 9:
        text = 'Nine ladies dancing,'
    elif number == 10:
        text = 'Ten lords a-leaping,'
    elif number == 11:
        text = 'Eleven pipers piping,'
    elif number == 12:
        text = 'Twelve drummers drumming,'
    
    return text

# This function take a number as parameter and return the entire relative verse using the previous
# two functions
def verse(number):
    verse = '*' + first_text(number)
    if number == 1:
        verse += '\n' + second_text(0)
    else:
        for i in range(number, 0, -1):
            verse += '\n' + second_text(i)
        
    return verse + '* \n'

# Program that display the entire song
for i in range(1, 13):
    print(verse(i))