check_letter= input("Enter letter to check: ")

check_letter=check_letter.lower()

vowel="aeiou"
number="1234567890"

if (check_letter in number):
  print("Your 'letter' is a number!! Please try again!")

if (check_letter in vowel):
  print("Your letter is a vowel")
if ((check_letter not in vowel) and (check_letter not in number)): 
  print("Your letter is a consonant")