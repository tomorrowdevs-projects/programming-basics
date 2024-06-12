#create a group of letter
v = ["a", "e", "i", "o", "u"]
#insert a letter of alphabet 
letter = input("Please insert a letter of alphabet: ")
if letter in v:
    print("Your letter is a vowel")
elif letter == str('y'):
    print("Your letter sometimes is a vowel and sometimes a consonant")
else:
    print("Your letter is a consonant")
