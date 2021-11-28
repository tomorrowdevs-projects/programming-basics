def check_psw(password):
    if len(password) >= 8 and password.isalnum():
        upper = 0
        lower = 0
        for i in range(0, len(password)):
            if password[i].isupper():
                upper += 1
            elif password[i].islower():
                lower += 1
        if upper >= 1 and lower >= 1:
            return True
    else:
        return False

def main():
    password = input('Insert a passwor to check it: ')           
    if check_psw(password):
        return print('Your password is valid\n' + ' *' * len(password))
    else:
        return print('ERROR! This password is not valid')   
         

if __name__ == '__main__':
    main()       
