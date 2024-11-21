
# defines a function that checks whether or not a password is good
def check_password(password):

# checks if password's length is at least 8 characters longer and store the result in "min_char"
    min_len = None
    if int(len(password)) >= 8:
        min_len = True
    else:
        min_len = False
# checks if password contains both lower and uppercase characters and store it in variable "upper and lower"
    upperandlower = None
    if password != password.islower() and password != password.isupper  ():
        upperandlower = True
    else:
        upperandlower = False
# check if there is at a least a number
    number = None
    for i in password:
        if i.isnumeric() == True:
            number = True
            break
# returns True if all the case before are true, either not
    if min_len == True and upperandlower == True and number == True:
        return True
    else:
        return False
    
# defines a main functions that return an appropriate message if password satisfies requirements
def main():
    password = (input('Enter password: '))
    if check_password(password) == True:
        print('This password is good')
    else:
        print('This password is not good enough!')

# assign to __name__ value of 'name' so the program could run only if is not imported in another file 
if __name__ == '__main__':
    main()