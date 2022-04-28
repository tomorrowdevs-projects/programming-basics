
day_gifts = [["first", "and a Partridge in a Pear Tree."],               #the gift on that day
          ["second", "two Turtle Doves, "],
          ["third", "three French Hens, "],
          ["fourth", "four Calling Birds, "],
          ["fifth", "five Gold Rings, "],
          ["sixth", "six Geese-a-Laying, "],
          ["seventh", "seven Swans-a-Swimming, "],
          ["eighth", "eight Maids-a-Milking, "],
          ["ninth", "nine Ladies Dancing, "],
          ["tenth", "ten Lords-a-Leaping, "],
          ["eleventh", "eleven Pipers Piping, "],
          ["twelfth", "twelve Drummers Drumming, "]]


# a function to create every verse of the song

def verse(item):
    first_part = f'On the {day_gifts[item][0]} day of Christmas, my true love gave to me: '           #on the first parte change only the day
    second_part = ''.join(str(day_gifts[item][1]) for i in range(item, -1, -1))                     #on the second parte i want to add the previous gift to the next day
    return first_part + (second_part.replace('and a', 'a')                                            #I want to replace the word and only in the first verse
                             if item == 0
                             else second_part)

def all_lyrics(start, end):                                                                           # this function show me all the verses one by one
    return '\n'.join(verse(item)
                     for item in range(start, end +1))

print(all_lyrics(0, 11))