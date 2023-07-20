
letters = input("Please insert a letter: ")

if letters in "aeiou":
    print("This letter is a vocal")
elif letters in "y":
    print("This letter is sometimes a vocal and sometimes a consonant")
else:
    print("This letter is a consonant")
