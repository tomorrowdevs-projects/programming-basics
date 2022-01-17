# defines a function that display a single verse of the christmas song
def christmas_song_verse(verse):
    if verse == 1:
        print('On the first day of Christmas my true love sent to me a partridge in a pear tree.')
    elif verse == 2:
        print('On the second day of Christmas my true love sent to me two turtle doves.')
    elif verse == 3:
        print('On the third day of Christmas my true love sent to me three French hens.')
    elif verse == 4:
        print('On the fourth day of Christmas, my true love sent to me four calling birds.')
    elif verse == 5:
        print('On the fifth day of Christmas my true love sent to me five golden rings.')
    elif verse == 6:
        print('On the sixth day of Christmas my true love sent to me six geese a laying.')
    elif verse == 7:
        print('On the seventh day of Christmas my true love sent to me seven swans a swimming.')
    elif verse == 8:
        print('On the eighth day of Christmas my true love sent to me eight maids a milking.')
    elif verse == 9:
        print('On the ninth day of Christmas my true love sent to me nine ladies dancing.')
    elif verse == 10:
        print('On the tenth day of Christmas my true love sent to me ten lords a leaping.')
    elif verse == 11:
        print('On the eleventh day of Christmas my true love sent to me eleven pipers piping.')
    elif verse == 12:
        print('On the twelfth day of Christmas my true love sent to me Twelve drummers drumming.')

# defines a function that display the whole song or the number of single verse 
def whole_christmas_song_verse():
    user = input('Enter a number between 1 and 12 for a specific verse or press enter to show all the song: ')
    if user == '':
        for i in range(1, 12):
            christmas_song_verse(i)
    elif int(user) in range(1, 12):
        christmas_song_verse(int(user))
    else:
        print('Not valid')

whole_christmas_song_verse()
