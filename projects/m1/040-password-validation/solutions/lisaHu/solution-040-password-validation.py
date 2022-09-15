def validation(string):
    #creation of lists containing lowercase and uppercase letters + list of digits
    lowercase = "abcdefghijklmnopqrstuvwxyz"
    uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    digits = "0123456789"

    #creation of booleans with value False
    lower, upper, number = False, False, False

    #check if the lenght of pass is good enough. Otherwise it will skip the for loop and go to the last if statements in function
    #if that's the case, it will return False as the booleans are all still False
    if len(string) >= 8:

        #if lenght of pass is good enough, the loop will check if every character is in one of the three list
        #even just 1 character of the string  will turn the boolean in True if it's in the referenced list
        for char in string:
            if char in lowercase:
                lower = True
            if char in uppercase:
                upper = True
            if char in digits:
                number = True
    if lower and upper and number:
        return True
    else:
        return False


#get input from user + call of function
password = input('Enter your password:  ')
validation(password)

#if the function with password as parameter returns True, it will display a message
#otherwise, if the return is False, it will display a different message
if validation(password) == True:
    print('Your password is good enough.')
else:
    print('Your password is not good enough.')