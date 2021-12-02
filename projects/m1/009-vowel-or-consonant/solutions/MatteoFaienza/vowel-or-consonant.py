# the user must insert a letter
letter=str(input('Enter a letter '))
# i use the conditional statement to find the correct solution

if letter in 'aeiou':
    print(letter,'is a vowel') 

elif letter == 'y':
    print(letter,'is vowel, and sometimes it s a consonant. ') 

else :
    print(letter,' is a consonant')                      