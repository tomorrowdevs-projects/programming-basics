def make_ordinal(num_day):
    suffix = "th"
    if num_day == 1:
        ordinal_num = "first"
    elif num_day == 2:
        ordinal_num = "second"
    elif num_day == 3:
        ordinal_num = "third"
    elif num_day == 4:
        ordinal_num= "four" 
    elif num_day == 5:
        ordinal_num = "fif"
    elif num_day == 6:
        ordinal_num = "six"
    elif num_day == 7:
        ordinal_num = "seven" 
    elif num_day == 8:
        ordinal_num = "eigh"
    elif num_day == 9:
        ordinal_num = "nin"
    elif num_day == 10:
        ordinal_num = "ten"
    elif num_day == 11:
        ordinal_num= "eleven"
    else:
        ordinal_num = "twelf"
    
    if 1<= num_day <= 3:
        return ordinal_num
    else: 
        return ordinal_num + suffix

def func_verse(num_day):
    if num_day == 1:
        verse = "A partridge in a pear tree."
        return verse
    else:
        if num_day == 2:
            verse = "Two turtle doves,"
        elif num_day == 3:
            verse = "Three French hens,"
        elif num_day == 4:
            verse= "Four calling birds," 
        elif num_day == 5:
            verse = "Five gold rings,"
        elif num_day == 6:
            verse = "Six geese a-laying,"
        elif num_day == 7:
            verse = "Seven swans a-swimming," 
        elif num_day == 8:
            verse = "Eight maids a-milking,"
        elif num_day == 9:
            verse = "Nine ladies dancing,"
        elif num_day == 10:
            verse = "Ten lords a-leaping,"
        elif num_day == 11:
            verse= "Eleven pipers piping,"
        elif num_day == 12:
            verse = "Twelve drummers drumming,"
    return f"{verse}\n"




def main():
    total_verse = ""
    last_verse = "And a partridge in a pear tree."
    for i in range(1,13):
        if i == 1:
            print(f"On the {make_ordinal(i)} day of Christmas"
            f"my true love sent to me:")
            print(func_verse(i))
        else:
            print(f"\nOn the {make_ordinal(i)} day of Christmas"
            f"my true love sent to me:")
            if not total_verse:
                print(func_verse(i) + last_verse)
            else:
                print(total_verse + func_verse(i) + last_verse)
            total_verse += func_verse(i)
        


if __name__ == "__main__":
    main()