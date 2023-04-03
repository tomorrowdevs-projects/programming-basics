import re

def is_true_psw(psw):
    has_uppercase = False
    has_lowercase = False
    has_numbers = False
    at_least_8 = False

    while not at_least_8 or not has_uppercase or not has_lowercase or not has_numbers:
        if len(psw) < 8:
            print("The password needs to be at least 8 characters.")
            psw = input("Insert a new password: ")
            continue
        else:
            at_least_8 = True

        if not re.search(r'.*[A-Z].*', psw):
            print("The password does not contain any uppercase letters.")
            psw = input("Insert a new password: ")
            continue
        else:
            has_uppercase = True

        if not re.search(r'[a-z]', psw):
            print("The password does not contain any lowercase letters.")
            psw = input("Insert a new password: ")
            continue
        else:
            has_lowercase = True

        if not re.search(r'\d', psw):
            print("The password does not contain any numbers.")
            psw = input("Insert a new password: ")
            continue
        else:
            has_numbers = True

    return True

if __name__ == "__main__":
    psw = input("Insert a password: ")
    is_true_psw(psw)
    print("True")