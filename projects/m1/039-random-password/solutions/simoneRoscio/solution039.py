import random

def passGenerator():
    index = 0
    l = random.randrange(7, 11)
    password = ''

    while index < l:
        rand_char = (random.randrange(33, 127))
        pass_char = chr(rand_char)
        password = password + pass_char
        index = index + 1

    return(password)

if __name__ == '__main__':

    print(passGenerator())