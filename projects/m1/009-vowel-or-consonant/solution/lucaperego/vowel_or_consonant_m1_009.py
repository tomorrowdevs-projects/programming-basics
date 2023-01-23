print("Alphabet Program - insert a letter - and it can tell you, if this letter is a consonant or a vowel")

letter = str(input("Enter a letter ---> "))

vowels = ("a", "e", "i", "o", "u")

found = False

for el in vowels:
    if el == letter:
        found = True
        continue

if found:
    print(f"[{letter}] is a vowel")
    
else:
    print(f"[{letter}] is NOT a vowel: it is a consonant")



