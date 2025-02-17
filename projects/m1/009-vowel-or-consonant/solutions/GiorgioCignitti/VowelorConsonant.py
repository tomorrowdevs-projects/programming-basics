letter=input("insert a letter: ")

def checkLetter(letter):
 number="1234567890";
 if(letter in number):
   return f"you inserted a number"
 elif (letter=="a" or letter=="e" or letter=="i" or letter=="o" or letter=="u"):
    return f"your letter is a vowel"
 elif(letter=="y"):
    return f"y sometimes y is a vowel, and sometimes y is a consonant"
 else:
    return f"your letter is a consonant"

print (checkLetter(letter))