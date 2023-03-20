#If the user enters a, e, i, o or u  display a message indicating that the entered letter is a vowel.
#If the user enters y display a message indicating that letter is vowel or consonant, other letters are consonant

vowel=input("enter a letter")

if vowel=='a' or vowel=='e' or vowel=='i'or vowel=='o' or vowel=='u':
    print("the letter is a vowel")
elif vowel == 'y':
     print("Y may be vowel and consonant")
else:print("the letter is a consonant")