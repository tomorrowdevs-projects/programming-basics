def new_dict(s):
    #the function will create a new dict based on argument
    #for every character in string, it will check if it's already in dict
    #if it is not, it will create a new key:value  -  else, it will add +1 to existing value
    dict = {}
    n = 1
    for c in s.lower():
        if c not in dict:
            dict[c] = n
        else:
            dict[c] += 1
    return dict

def anagrams(d1,d2):
    #the function will compare the 2 elements/arguments
    if d1 == d2:
        return True
    else:
        return False

if __name__ == "__main__":
    string1 = input('Enter 1st string: ')
    string2 = input('Enter 2nd string: ')
    if anagrams(new_dict(string1),new_dict(string2)):
        print("'" + string1 + "' and '" + string2 + "' are ANAGRAMS")
    else:
        print("'" + string1 + "' and '" + string2 + "' are NOT anagrams")