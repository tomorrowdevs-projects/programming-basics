#variables
vowels = "a", "e", "i", "o", "u"
both_y = "y"
consonants = "b", "c", "d", "f", "g", "h", "j", "k", "l", "m", "n", "p", "q", "r", "s", "t", "v", "w", "x", "z"

print ("Insert a letter of the alphabet:")
letter = str(input())

#continue if the user input only 1 letter
if len(letter) != 1:
    print ("Error! Insert only 1 letter!")
    letter = str(input())

#vowels, y, consonants
else:
    if letter in vowels:
        print ("Your letter is a vowel!")
    
    elif letter == both_y:
        print ("sometimes y is a vowel, and sometimes y is a consonant.")
    
    else:
        print ("Your letter is a consonant!")