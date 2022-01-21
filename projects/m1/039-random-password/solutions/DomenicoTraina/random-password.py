
import random

def generate ():
    password=""
    index= random.randint(7, 10) #number of characters of password

    for i in range(index):
        randomchar= random.randint(33, 126)
        password += chr(randomchar)

    print(f'The password generated for you is "{password}"and has {index} characters')

generate()