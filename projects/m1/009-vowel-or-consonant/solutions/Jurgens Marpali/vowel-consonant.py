vowel = 'aeiou'

letters = input("Please enter a letter:")

if letters in vowel:
    print(f"{letters}  is a vowel")

elif letters =='y':
    print("The Letter Y can be either a vowel or a consonant")

else:
    print("Your Letter is a consonant")

#if letters.isnumeric:
#    print("Please write only letters.")
#Why does it not work?


