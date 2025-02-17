# The Twelve days of Christmas

from integer_to_ordinal import int_to_ord

def gift_of_the_day(day):
    if day == 1: gift = "A partridge in a pear tree"
    elif day == 2: gift = "Two turtle doves"
    elif day == 3: gift = "Three French hens"
    elif day == 4: gift = "Four calling birds"
    elif day == 5: gift = "Five gold rings"
    elif day == 6: gift = "Six geese a-laying"
    elif day == 7: gift = "Seven swans a-swimming"
    elif day == 8: gift = "Eight maids a-milking"
    elif day == 9: gift = "Nine ladies dancing"
    elif day == 10: gift = "Ten lords a-leaping"
    elif day == 11: gift = "I sent eleven pipers piping"
    elif day == 12: gift = "Twelve drummers drumming"
    return gift

# function that prints a verse chosen by the user
def chosen_verse(v):
    print("On the {} day of Christmas, my true love sent to me {}".format(int_to_ord(v), gift_of_the_day(v)))

# function that prints the entire lyrics of the song
def complete_lyrics():
    verse = 1
    while verse <= 12:
        first_part = "On the {} day of Christmas, my true love sent to me \n".format(int_to_ord(verse))
        if verse == 1:
            print(first_part + gift_of_the_day(verse))
            second_part = "\nAnd a partridge in a pear tree"
        else:
            print(first_part + gift_of_the_day(verse) + second_part)
            second_part = "\n" + gift_of_the_day(verse) + second_part
        print("")
        verse += 1

# main program that allows the user to choose whether to print a verse of their choice or the complete lyrics
def main():
    verse_user = ""
    while verse_user != 0:
        verse_user = int(input("\nEnter the verse number(1-12) or enter 13 for the complete lyrics (0 to quit): "))
        print("")
        if 1 <= verse_user <= 12:
            chosen_verse(verse_user)
        elif verse_user == 13:
            complete_lyrics()

if __name__ == "__main__":
    main()