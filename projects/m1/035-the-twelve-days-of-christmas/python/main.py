ordinal = ['First', 'Second', 'Third', 'Fourth', 'Fifth', 'Sixth', 'Seventh', 'Eighth', 'Ninth', 'Tenth', 'Eleventh', 'Twelfth']

def int_to_ordinal(int_number):
    converted_N = ordinal[int_number - 1]
    return converted_N  

song_verse = ['A partridge in a pear tree', 'Two turtle doves, and', 'Three french hens', 'Four calling birds', 'Five golden rings', 
              'Six geese a-laying', 'Seven swans a-swimming', 'Eight maids a-milking', 'Nine ladies dancing', 'Ten lords a-leaping',
              'Eleven pipers piping', 'Twelve drummers drumming' ]

def verse_selection():
    verse_number = int(input('What verse of the song do you want to see? '))
    if verse_number > 12:
        print('The song have only 12 verses!')
        return

    int_to_ordinal(verse_number)
    song_printer(verse_number)

def song_printer(verse_number):
    starting_sentence = f'On the {int_to_ordinal(verse_number)} day of Christmas, my true love sent to me'

    print(starting_sentence)
    while verse_number >= 1:
        # "verse_number - 1" 'cos of the list index starting from 0
        print(song_verse[verse_number - 1])
        verse_number = verse_number - 1

if __name__ == "__main__":
    verse_selection()