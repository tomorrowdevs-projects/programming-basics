def gift_of_day(number):
    """
    This function builds the text of the relative ordinal number
    and return its string value
    """
    if number == 1:
        text_ordinal_num = 'first'
        gift_of_day = 'A partridge in a pear tree'
    elif number == 2:
        text_ordinal_num = 'second'
        gift_of_day = 'Two turtle doves'
    elif number == 3:
        text_ordinal_num = 'third'
        gift_of_day = 'Three French hens'
    elif number == 4:
        text_ordinal_num = 'fourth'
        gift_of_day = 'Four calling birds'
    elif number == 5:
        text_ordinal_num = 'fiveth'
        gift_of_day = 'Five golden rings'
    elif number == 6:
        text_ordinal_num = 'sixth'
        gift_of_day = 'Six geese a-laying'
    elif number == 7:
        text_ordinal_num = 'seventh'
        gift_of_day = 'Seven swans a-swimming'
    elif number == 8:
        text_ordinal_num = 'eighth'
        gift_of_day = 'Eight maids a-milking'
    elif number == 9:
        text_ordinal_num = 'ninth'
        gift_of_day = 'Nine ladies dancing'
    elif number == 10:
        text_ordinal_num = 'tenth'
        gift_of_day = 'Ten lords a-leaping'
    elif number == 11:
        text_ordinal_num = 'eleventh'
        gift_of_day = 'Eleven pipers piping'
    elif number == 12:
        text_ordinal_num = 'twelfth'
        gift_of_day = 'Twelve drummers drumming'
    else:
        return '<day_out_of_range>' , '<gift_day_out_of_range>'

    return text_ordinal_num , gift_of_day


def main():
    print('go')

verse = ''
song = ''


last_row_sentence = gift_of_day(1)[1].replace('A partridge', 'and a partridge')
#print(last_row_sentence)

for count in range(2,13):

    if count == 2:
        verse_first = f'{gift_of_day(count-1)[1]}\n'
        start_sentence = f'On the {gift_of_day(count-1)[0]} day of Christmas\nMy true love sent to me:\n'
        #print(start_sentence + verse_first)
        song += start_sentence + verse_first + '\n'

    verse += f'{gift_of_day(count)[1]}\n'
    start_sentence = f'On the {gift_of_day(count)[0]} day of Christmas\nMy true love sent to me:\n'
    #print(start_sentence + verse + last_row_sentence)
    song += '\n' + start_sentence + verse + last_row_sentence +'\n'


print(song)



if __name__ == "__main__":
    main()



