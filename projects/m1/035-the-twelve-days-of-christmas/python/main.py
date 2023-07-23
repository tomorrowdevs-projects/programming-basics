from integer_to_ordinal import ordinal_number

def gift_of_day(number):
    if number == 1:
        return "A partridge in a pear tree"
    elif number == 2:
        return "Two turtle doves and"
    elif number == 3:
        return "Three French hens"
    elif number == 4:
        return "Four calling birds"
    elif number == 5:
        return "Five golden rings"
    elif number == 6:
        return "Six geese a-laying"
    elif number == 7:
        return "Seven swans a-swimming"
    elif number == 8:
        return "Eight maids a-milking"
    elif number == 9:
        return "Nine ladies dancing"
    elif number == 10:
        return "Ten lords a-leaping"
    elif number == 11:
        return "Eleven pipers piping"
    elif number == 12:
        return "Twelve drummers drumming"
    else:
        return ""

    
def verse_of_song(number):
    print("On the {} day of Christmas my true love sent to me:".format(ordinal_number(number)))
    for i in range(number,0,-1):
        print(gift_of_day(i))
    print("")

for verse in range(1,13):
    verse_of_song(verse)