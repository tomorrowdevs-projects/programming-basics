# Write a function that generates a random password. 
from random import randint
def random_password():

    #random length of between 7 and 10 characters. 
    length = randint(7, 10)
    rand_password = ''
    
    for i in range(length):      
        #random number from positions 33 to 126 in the ASCII table.
        character = chr(randint(33, 126))
        rand_password += character
    print(rand_password)

def main():
    random_password()

if __name__ == '__main__':
    main()
