def password_validation(psw: str) -> bool:
    '''
    Returns True if *psw*:
    - is 8 char long at least
    - at least has: a number, an upper case letter and a lower case letter

    '''
    import string

    validation_number= False
    validation_lower = False
    validation_upper = False

    if len(psw) >= 8:
        for char in psw:
            if char.isdigit():
                validation_number = True
            elif char.isupper():
                validation_upper = True
            elif char.islower():
                validation_lower = True
        if validation_number and validation_upper and validation_lower:
            return True
        else:
            return False
    else:
        return False
    

if __name__=="__main__":
    passw = input("Insert a password: ")
    validation = password_validation(passw)
    if validation:
        print("Password VALID")
    else:
        print("Password NOT VALID")
    


