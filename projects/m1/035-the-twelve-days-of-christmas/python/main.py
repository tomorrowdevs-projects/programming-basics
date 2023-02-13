days = "first","second","third","fourth","fifth","sixth","seventh","eighth","ninth","tenth","eleventh","twelfth"

lyrics = ["Twelve Drummers Drumming","Eleven Pipers Piping","Ten Lords-a-Leaping","Nine Ladies Dancing",
"Eight Maids-a-Milking","Seven Swans-a-Swimming","Six Geese-a-Laying","Five Gold Rings",
"Four Calling Birds","Three French Hens","Two turtle doves","And a partridge in a pear tree."]

def song_lyrics():
    
    days_ordinal = 0
    first_verse = "On the {} day of Christmas my true love sent to me: A partridge in a pear tree" .format(days[days_ordinal])    
    print(first_verse)
    days_ordinal += 1
    lyrics_ordinal = 10
    print(" ")

    while days_ordinal < 12:
        
        first_verse = "On the {} day of Christmas my true love sent to me: " .format(days[days_ordinal])
        subsequent_verse = ', '.join(lyrics[lyrics_ordinal:12])    
        print(first_verse + subsequent_verse)
        print(" ")
        days_ordinal += 1
        lyrics_ordinal -= 1

song_lyrics()












