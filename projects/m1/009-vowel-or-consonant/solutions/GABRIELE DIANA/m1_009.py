# In this exercise you will create a program that reads a letter of the alphabet from the user. 
# If the user enters a, e, i, o or u
# then your program should display a message indicating that the entered letter is a vowel.
# If the user enters y then your program should display a message
# indicating that sometimes y is a vowel, and sometimes y is a consonant.
# Otherwise your program should display a message indicating that the letter is a consonant.

user = input("Check if it's vowel or not :")
user = user.lower()
vowels = "aeiou"
consonants = "bcdfghjklmnpqrstvxz"


if user in vowels:
    print(user + " is a vowel")
elif user == "y":
    print(user + " sometimes is a vowel and sometimes is a consonant")
elif user in consonants:
    print(user + " is a consonant")
else:
    print("Please insert a valid value")
