def password_validation(password):

    if len(password) < 8:
        return False

    num = []
    upper_l = []
    lower_l = []

    for char in password:
        aschii_char = ord(char)

        if 48 <= aschii_char <= 57:
            num.append(1)

        elif 65 <= aschii_char <= 90:
            upper_l.append(1)

        elif 97 <= aschii_char <= 122:
            lower_l.append(1)
        
    if (sum(num) == 0) or (sum(upper_l) == 0) or (sum(lower_l) == 0):
        return False

    return True

if __name__ == '__main__':
    password = input('Enter a password to determine if its good or not: ')
    print(password_validation(password))