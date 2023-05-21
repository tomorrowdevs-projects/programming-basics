alphabet = ["a","e","i","o","u"]
y = "y"
string_letter = str(input("Enter a letter of the alphabet: "))

if string_letter in alphabet:
    print("The letter is a vowel")

elif string_letter == y:
    print("Sometimes y is a vowel and sometimes y is a consonant")

else: print("The letter is a consonant")