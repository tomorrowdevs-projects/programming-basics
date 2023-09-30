from solution034 import cardinal_to_ordinal

def display_verse(n):  

    # function that displays one verse of the song. 
    # It will take the verse number as its only parameter.
    
    if 0 < n < 13:
        print(f'*On the {cardinal_to_ordinal(n)} day of Christmas my true love sent to me:')   
        if n == 1:
            print('A partridge in a pear tree.*')
        else:
            while n > 1:
                if n == 2:
                        print('Two turtle doves,')
                        print('And a partridge in a pear tree.*')
                elif n == 3:
                        print('Three French hens,')
                elif n == 4:
                        print('Four calling birds,')
                elif n == 5:
                        print('Five golden rings,') 
                elif n == 6:
                        print('Six geese a-laying,')
                elif n == 7:
                        print('Seven swans a-swimming,')
                elif n == 8:
                        print('Eight maids a-milking,')
                elif n == 9:
                        print('Nine ladies dancing,') 
                elif n == 10:
                        print('Ten lords a-leaping,')
                elif n == 11 :
                        print('Eleven pipers piping,')
                elif n == 12 :
                        print('Twelve drummers drumming,')
                n -= 1

# Write a program that displays the complete lyrics for The Twelve Days of Christmas. 
# your program should call this function 12 times

def main():
    display_verse(12)

main()