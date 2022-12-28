# This is a comment of source code pattern

def containsUpperCase(password):
    '''
        This function return True or False if argument contains a upper case character
    '''

    res = False
    for ele in password:
        # checking for uppercase character and flagging
        if ele.isupper():
            res = True
            break
    return res

def containsLowerCase(password):
    '''
        This function return True or False if argument contains a lower case character
    '''

    res = False
    for ele in password:
        # checking for uppercase character and flagging
        if ele.islower():
            res = True
            break
    return res

def passwordValidation(password):
    '''
        This function return True or False if argument meets all three requirements.
    '''

    atleast8char =  len(password) > 7
    atleastOneUpperCase = containsUpperCase(password)
    atleastOneLowerCase = containsLowerCase(password)

    return True if (atleast8char and atleastOneUpperCase and atleastOneLowerCase) else False


def main():
    # Call function main to execute
    print('The password must be at least 8 characters long, contain at least one uppercase and at least one lowercase')
    password = input('Insert a password ')

    if (passwordValidation(password)):
        print(f'password {password} is valid!')
    else:
        print(f'password {password} is not valid!')

    #execute_test()


def execute_test():
    # Test
    print('-------- BEGIN TEST')
    # paswsword valid
    print(passwordValidation('abcef12A'))
    # paswsword not valid
    print(not passwordValidation('abcef12a'))
    print(not passwordValidation('abce12A'))
    print('-------- END TEST')


if __name__ == "__main__":
    main()
