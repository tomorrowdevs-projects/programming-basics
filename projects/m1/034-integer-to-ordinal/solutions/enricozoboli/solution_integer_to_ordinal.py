def make_ordinal(num):
    suffix = "th"
    if num < 1 or num > 12:
        return ""
    elif num == 1:
        ordinal_num = "First"
    elif num == 2:
        ordinal_num = "Second"
    elif num == 3:
        ordinal_num = "Third"
    elif num == 4:
        ordinal_num = "Four" 
    elif num == 5:
        ordinal_num = "Fif"
    elif num == 6:
        ordinal_num = "Six"
    elif num == 7:
        ordinal_num = "Seven" 
    elif num == 8:
        ordinal_num = "Eigh"
    elif num == 9:
        ordinal_num = "Nin"
    elif num == 10:
        ordinal_num = "Ten"
    elif num == 11:
        ordinal_num = "Eleven"
    else:
        ordinal_num = "Twelf"
    
    if 1<= num <= 3:
        return ordinal_num
    else: 
        return ordinal_num + suffix

def main():
    print(make_ordinal(1))
    print(make_ordinal(2))
    print(make_ordinal(3)) 
    print(make_ordinal(4))
    print(make_ordinal(5)) 
    print(make_ordinal(6)) 
    print(make_ordinal(7)) 
    print(make_ordinal(8))
    print(make_ordinal(9)) 
    print(make_ordinal(10))
    print(make_ordinal(11)) 
    print(make_ordinal(12)) 
    print(make_ordinal(13)) 
    print(make_ordinal(0)) 
        

if __name__== "__main__":
    main()