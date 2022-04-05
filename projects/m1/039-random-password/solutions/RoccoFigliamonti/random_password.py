"""
Write a function that generates a random password. 
The password should have a random length of between 7 and 10 characters. 
Each character should be randomly selected from positions 33 to 126 in the ASCII table. 
Your function will not take any parameters. 
It will return the randomly generated password as its only result. 
Display the randomly generated password in your file’s main program. 
"""


from random import randint

def password_randomizer():
    num_of_char = randint(7,10)
    #print(num_of_char)
    password_genereted = ""
    for i in range (num_of_char):
        char_choise = chr(randint(33,126))
        password_genereted += char_choise
    return password_genereted



print(password_randomizer()) 