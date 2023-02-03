def check_vowel_or_consonant(letter):  #i created a function that accept a variable named letter 
    letter = letter.lower() #lower() function helps me to take as an input also capitalize letters
    if letter in ['a', 'e', 'i', 'o', 'u']: #i used list and not or
        print("The letter is a vowel.")
    elif letter == 'y':
        print("The letter is sometimes a vowel and sometimes a consonant.")
    else:
        print("The letter is a consonant.")
    letter = input("Enter another letter of the alphabet: ")
    check_vowel_or_consonant(letter)   #this steps here helps me to make recoursion, I don't know how to do witouth this step

letter = input("Enter a letter of the alphabet: ")
check_vowel_or_consonant(letter) #I call the function after the input 