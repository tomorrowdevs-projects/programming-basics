def validate(password):
    if len(password) >= 8:
        count_L = 0
        count_l = 0
        count_n = 0
        for i in range(len(password)):
            if ord(password[i]) in range(65, 91): #caratteri maiuscoli
                count_L += 1
            elif ord(password[i]) in range(97, 123): #caratteri minuscoli
                count_l += 1
            elif ord(password[i]) in range(48, 58): #numeri
                count_n += 1
        if count_L > 0 and count_l > 0 and count_n > 0:
            return True
    return False

if __name__ == '__main__':
    my_password = input("Enter a password: ")
    print(validate(my_password))