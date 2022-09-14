import string
import random

def password():

    #variables of random generated number and of joint ascii strings
    lenght = random.randint(7, 10)
    
    characters = string.ascii_letters + string.digits + string.punctuation
    #generated string with random characters in range of lenght variable
    random_password = random.sample(characters, lenght)

    #print results
    print('Your generated password is:')
    return print(*random_password, sep = '')

password()
