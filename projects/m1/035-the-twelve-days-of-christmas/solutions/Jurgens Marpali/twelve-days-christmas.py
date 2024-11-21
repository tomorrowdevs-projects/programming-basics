def ordinal(num_day):
    pre= ('Four', 'Fif', 'Six', 'Seven', 'Eight', 'Nin', 'Ten', 'Eleven', 'Twelf')
    #suffix = 'th' tried to use ord = pre + suffix but it wouldn't work.
    if num_day == 1:
        ord = 'First'
    elif num_day == 2:
        ord = 'Second'
    elif num_day == 3:
        ord = 'Third'
    elif 4 <= num_day <=12:
        ord = pre[num_day - 4] + 'th'
    
    return ord 
       
    

def song(num_day):
    if num_day == 1:
        verse = 'A partridge in a pear tree,'
    elif num_day == 2:
        verse = 'Two turtle doves,'
    elif num_day == 3:
        verse = 'Three french hens,'
    elif num_day == 4:
        verse = 'Four calling birds,'
    elif num_day == 5:
        verse = 'Five gold rings,'
    elif num_day == 6:
        verse  = 'Six geese a-laying,'
    elif num_day == 7:
        verse = 'Seven swans a-swimming,'
    elif num_day == 8:
        verse = 'Eight Maids a-milking,'
    elif num_day == 9:
        verse = 'Nine ladies dancing,'
    elif num_day == 10:
        verse = 'Ten lords a-leaping,'
    elif num_day == 11:
        verse = 'Eleven pipers piping,'
    elif num_day == 12:
        verse = 'Twelve drummers drumming.'
    return verse

def main():
    for n in range(1,13):
        print(f"On the {ordinal(n)} day of christmas my love sent to me:")
        print(song(n))

if __name__ == "__main__":
    main()
    


