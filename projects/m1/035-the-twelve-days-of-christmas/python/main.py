def find_key_value(key):
    """
    Prints the corresponding parts of the song "The Twelve Days of Christmas" starting from the given number.

    Args:
        key (int): An integer between 1 and 12.

    Returns:
        None: The function doesn't return any value but prints the song parts.
    """

    # Dictionary containing the song parts
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

    # List of dictionary keys
    keys = list(part_song.keys())

    # First part of the song, from the entered number up to 12
    for k in range(key-1, 12):
        print(f"On the {keys[k]} day of Christmas my true love sent to me: {part_song[keys[k]]}")

    # Second part of the song, from 1 up to the entered number minus one
    for k in range(0, key-1):
        print(f"On the {keys[k]} day of Christmas my true love sent to me: {part_song[keys[k]]}")
