"""# Vowel or Consonant

In this exercise you will create a program that reads a letter of the alphabet from the user. 
If the user enters a, e, i, o or u then your program should display a message indicating that the entered letter is a vowel. 
If the user enters y then your program should display a message indicating that sometimes y is a vowel, and sometimes y is a consonant. 
Otherwise your program should display a message indicating that the letter is a consonant.

"""


letter=input("Please type a letter: ")

vowels = ["a","e","i","o","u","A","E","I","O","U"] 

if letter in vowels:
    print("Your letter " + letter + " is a vowel")
elif letter=="y" or letter=="Y":
    print("Your letter " + letter + " is sometimes a vowel and other times a consonant")
else:
    print("Your letter " + letter + " is a consonant")
