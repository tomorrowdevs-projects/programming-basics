import sys
import random

try:
    
    f = open(sys.argv[1],"r")

    words = []

    for line in f:
        words += line.split()
    
    #Generate a new password until password lenght is between 8 and 10 chars long
    while True:
        password = ""
        count = 0
        word_in_password = (random.choice(words).capitalize())

        while count < 2 and len(word_in_password)>=3:
            password += word_in_password
            count += 1
            word_in_password = (random.choice(words).capitalize())
            
        if  len(password) >= 8 and len(password) <= 10:
            break

    print( f"Your password is: {password}")


except FileNotFoundError:
    print("ERROR! File not found")
except IndexError:
    print("ERROR! File name arg omitted")
    