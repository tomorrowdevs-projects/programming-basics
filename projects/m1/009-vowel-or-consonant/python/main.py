'''
# Vowel or Consonant

In this exercise you will create a program that reads a letter of the alphabet from the user.   
If the user enters **a, e, i, o or u** then your program should display a message 
indicating that the entered letter is a **vowel**.  
If the user enters **y** then your program should display a message 
indicating that **sometimes y is a vowel, and sometimes y is a consonant**.   
Otherwise, your program should display a message indicating that **the letter is a consonant**.
'''

print("\nHi folks! Welcome to \"Vowel or Consonant\"!"
      "\nIt seems i don't need to explain what we'll do here today."
      "\n\nLet's play together!")

letter = input("\nPlease insert one single letter: ")

if letter == 'a' or letter == 'e' or letter == 'i' or letter == 'o' or letter == 'u':
    print("\nThe letter you insert is a vowel.")
elif letter == 'y':
    print("\nSometimes y is a vowel and sometimes y is a consonant")
else:
    print("\nThis letter is a consonant.")