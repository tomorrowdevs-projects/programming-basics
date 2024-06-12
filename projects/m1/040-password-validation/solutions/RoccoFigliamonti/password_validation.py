"""
In this exercise you will write a function that determines whether or not a password is good. We will define a good password to be a one that is at least 8 characters long and contains at least one uppercase letter, at least one lowercase letter, and at least one number. Your function should return True if the password passed to it as its only parameter is good. Otherwise it should return False. Include a main program that reads a password from the user and reports whether or not it is good. Ensure that your main program only runs when your solution has not been imported into
another file.
"""

#uppercase char 65-90
#lowecase chr 97-122

def password_good(password=""):
    password = set(password)
    uppercase = {chr(i) for i in range(65,91)}
    #print(uppercase)
    lowercase = {chr(el) for el in range (97,123)}
    #print(lowercase)
    numbers = {str(i) for i in range(10)} #<--the password is a set of string, so the numbers have to be converted too 
    if len(password)>=8 and (password & uppercase) and (password & lowercase) and (password & numbers):
        return True 
    else:
        return False


print(password_good("Lvs54Rihwf"))
print(password_good("843nirBDHU"))
print(password_good("Lvsihw8"))
print(password_good("ihvsbividlab"))
print(password_good("LHBDIHBIBHB"))