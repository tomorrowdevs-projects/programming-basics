aeiou = ["a","e","i","o","u"]
y = "y"
letter = str.lower(input("Enter a letter of the alphabet: "))

if letter in aeiou:
    print("The letter is a vowel")

elif letter == y:
    print("Sometimes y is a vowel and sometimes y is a consonant")

else: print("The letter is a consonant")




    