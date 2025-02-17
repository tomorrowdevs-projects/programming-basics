from random import random
import string
import random

def random_password():
    punctuation = string.punctuation
    numbers = string.digits
    letters = string.ascii_letters
    caracthers = punctuation + numbers + letters
    password = ''
    for x in range(0,random.randint(7,10)):
        password += random.choice(caracthers)
    print(password)

random_password()