"""
Write a program that displays the complete lyrics for The Twelve Days of Christ- mas. 
Your program should include a function that displays one verse of the song. 
It will take the verse number as its only parameter. Then your program should call this function 12 times with integers that increase from 1 to 12.

Each item that is sent to the recipient in the song should only appear in your program once, with the possible exception of the partridge. It may appear twice if that helps you handle the difference between “A partridge in a pear tree” in the first verse and “And a partridge in a pear tree” in the subsequent verses. """

#support function
def convertor(num):
    """This function converts the integer numbers from 1 to 12 into the respective ordinal"""
    number = [i for i in range(1,13)]
    ordinal = ["First", "Second", "Third", "Fourth", "Fifth", "Sixth",
                "Seventh", "Eighth","Ninth","Tenth","Eleventh","Twelfth"]
    conv_dict = dict(zip(number,ordinal))
    if num in number:
        return conv_dict[num]
    else:
        return ""



def xmas_song(verse_number):
    """This function prints the verse of the song given its number"""
    num = [i for i in range(1,13)]
    verse = ["\nand a partridge in a pear tree", "\ntwo turtle-doves",
             "\nthree French hens", "\nfour calling birds",
             "\nfive golden rings", "\nsix geese laying",
             "\nseven swans swimming", "\neight maids milking",
             "\nnine ladies dancing", "\nten lords leaping",
             "\neleven pipers piping", "\ntwelve drummers drumming"]
    refrain = "On the " + convertor(verse_number).lower() + " day of Christmas\nmy true love sent to me"
    first_verse_exception = "\na partridge in a pear tree"
    num_to_verse = dict(zip(num,verse))
    if verse_number==1:
        return refrain + first_verse_exception
    elif verse_number>12 or verse_number<1:
        error_mex = ("This song has only 12 verse!!")
        return error_mex
    else:
        print(refrain, end=" ")
        while verse_number >= 1:
            print(num_to_verse[verse_number], end="")
            verse_number -= 1
        return ""



for i in range(1,13):
    print(xmas_song(i))