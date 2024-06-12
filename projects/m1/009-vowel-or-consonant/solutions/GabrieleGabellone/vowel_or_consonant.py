#vowel or consonant
#this program reads a letter entered by the user and displays wheter it is a vowel or a consonant

letter_entered = str(input("Enter a letter: "))
letter = letter_entered.lower()
if letter == "a" or letter == "e" or letter == "i" or letter == "o" or letter == "u":
    print("The letter entered is a vowel")
elif letter == "y":
    print("The letter entered is sometimes a vowel and sometimes a consonant")
else:
    print("The letter entered is a consonant")