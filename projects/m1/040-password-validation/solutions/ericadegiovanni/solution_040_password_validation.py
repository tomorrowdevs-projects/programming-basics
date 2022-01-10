# determine whether or not a password is good.

def password_validation(psw):
    is_length = False
    is_upper = False
    is_lower = False
    is_number = False

    # at least 8 characters long 
    if len(psw) >= 8:
        is_length = True
    
    # at least one uppercase letter
    for i in psw:
        if i.isupper():
            is_upper = True
            break
    
    # at least one lowercase letter
    for i in psw:
        if i.islower():
            is_lower = True
            break

    # at least one number
    for i in psw:
        if i.isdigit():
            is_number = True
            break

    return is_length and is_upper and is_lower and is_number
        
def main():
    user_password = input('Enter a password: ')
    print(f"{'Your password is strong.' if password_validation(user_password) else 'Your password is weak.' }")

if __name__ == '__main__':
   main()