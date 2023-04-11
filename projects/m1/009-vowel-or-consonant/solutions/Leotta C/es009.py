letter=input("Enter a letter: ")
vowels=["a","e","i","o","u"]

if letter in vowels:
    print("you entered a vowel")
elif letter=="y" :
    print("sometimes y is a vowel, and sometimes y is a consonant")
else :
    print("you entered a consonant")