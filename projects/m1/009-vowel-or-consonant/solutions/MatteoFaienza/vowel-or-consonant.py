# the user must insert a letter
letter=str(input('Enter a letter '))
# i use the conditional statement to find the correct solution
if letter == 'a':
    print('a is a vowel')    
elif letter == 'e':
    print('e is a vowel')
elif letter == 'i':
    print('i is a vowel')
elif letter == 'o':
    print('o is a vowel')
elif letter == 'u':
    print('u is a vowel')
elif letter == 'y':
    print('y is vowel, and sometimes it s a consonant. ') 
else :
    print(letter,' is a consonant')                     