vowels = "aeiou"

# Asking user for input.
user_letter = input("Enter a letter: ")

# Perform a test to define the type of letter and print it.
if user_letter.lower() in vowels:
    print(f"{user_letter.upper()} is a vowels.")
elif user_letter.lower() == "y":
    print("Y is sometimes is as a vowel and sometimes is a consonant.")
else :
    print(f"{user_letter.upper()} is a consonant.")

