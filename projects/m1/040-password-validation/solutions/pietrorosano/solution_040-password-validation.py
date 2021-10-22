# In this exercise you will write a function that determines whether or not a password is good.
# We will define a good password to be a one that is at least 8 characters long and contains at least one uppercase letter,
# at least one lowercase letter, and at least one number.
# Your function should return True if the password passed to it as its only parameter is good.
# Otherwise it should return False.
# Include a main program that reads a password from the user and reports whether or not it is good.
# Ensure that your main program only runs when your solution has not been imported into another file.

print("\nEnter your password:")
password = input()
password_list = list(password)

def psw_validation(p):
    testUpper = []
    testLower = []
    testDigits = []
    testOther = []
    lower = "abcdefghijklmnopqrstuvwxyz"
    upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    digits = "1234567890"
    lower_list = list(lower)
    upper_list = list(upper)
    digits_list = list(digits)

    for n in p:
        if n in lower_list:
            testLower.append(n)
        elif n in upper_list:
            testUpper.append(n)
        elif n in digits_list:
            testDigits.append(n)
        else:
            testOther.append(n)

    if len(testLower) >= 1 and len(testUpper) >= 1 and len(testDigits) >= 1 and len(p) >= 8:
        print("\nGreat! Your password is safe.")
    else:
        print("\nError! Your password has to be at least 8 characters long and contains at least one uppercase letter, at least one lowercase letter, and at least one number.")


psw_validation(password_list)