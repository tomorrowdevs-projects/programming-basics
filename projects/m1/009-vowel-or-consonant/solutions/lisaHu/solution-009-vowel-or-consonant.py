#In this exercise you will create a program that reads a letter of the alphabet from the user. 
#If the user enters a, e, i, o or u then your program should display a message indicating that the entered letter is a vowel. 
#If the user enters y then your program should display a message indicating that sometimes y is a vowel, and sometimes y is a consonant. 
#Otherwise your program should display a message indicating that the letter is a consonant

letter = input("Welcome! Please, enter the letter: ")


if letter == "a":
    print("The letter " + letter + " is a vowel!")
elif letter == "e":
    print("The letter " + letter + " is a vowel!")
elif letter == "i":
    print("The letter " + letter + " is a vowel!")
elif letter == "o":
    print("The letter " + letter + " is a vowel!")
elif letter == "u":
    print("The letter " + letter + " is a vowel!")
elif letter == "y":
    print("The letter " + letter + " is sometimes a vowel, sometimes a consonant!")
else:
    print("The letter " + letter + " is a consonant!")