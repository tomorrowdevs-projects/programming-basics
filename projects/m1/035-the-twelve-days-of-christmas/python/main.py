def find_key_value(key):
    part_song = {
    "first": "a partridge in a pear tree",
    "second": "two turtle doves",
    "third": "three French hens",
    "fourth": "four calling birds",
    "fifth": "five golden rings",
    "sixth": "six geese a-laying",
    "seventh": "seven swans a-swimming",
    "eighth": "eight maids a-milking",
    "ninth": "nine ladies dancing",
    "tenth": "ten lords a-leaping",
    "eleventh": "eleven pipers piping",
    "twelfth": "twelve drummers drumming"
    }

    keys = list(part_song.keys())

    # Prima parte della canzone, dal numero inserito fino a 12
    for k in range(key-1, 12):
        print(f"On the {keys[k]} day of Christmas my true love sent to me: {part_song[keys[k]]}")

    # Seconda parte della canzone, dall'1 fino al numero precedente a quello inserito
    for k in range(0, key-1):
        print(f"On the {keys[k]} day of Christmas my true love sent to me: {part_song[keys[k]]}")

key = int(input("Enter a number from 1 to 12: "))
find_key_value(key)