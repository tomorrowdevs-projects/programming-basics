#script to get a random password with two words picked randomically from an external file

#Capitalize each word in the password so that the user can easily see where one word ends and the next one begins. 

import sys
import random

#initiate a global password string empty
password_string = ""

#function to get the password
def passwordProducer(list_file):
    #local list to load all strings from file as list
    u = []
    global password_string
    with open(list_file) as f:
        for i in f.read().splitlines() :
            #title() capitalize first letter
            u.append(i.title())
    # _ to hide variable and only cycle to get password between 8 and 10 characters
    for _ in range(2):
        password_string = password_string + random.choice(u)
        if len(password_string) < 8:
            password_string = password_string + random.choice(u)
        if len(password_string) > 10:
            password_string = password_string[0:10]
    f.close()
    return password_string

#call function for second argument of bash's prompt if file exist
if __name__ == '__main__':
    try:
        passwordProducer(sys.argv[1])
        #print out password
        print(f'Your password is: {password_string}')
    except:
        print('File doesn\'t exist or argoument is null.') 

