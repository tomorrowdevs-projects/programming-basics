def random_password(pw):
    if len(pw) < 8:
        return False
    else:
        for i in pw:
            if i.isupper():
                for i in pw:
                    if i.islower():
                        for i in pw:
                            if i.isdigit():
                                for i in pw:
                                    return True
        return False
    

def main():
    user_pw = input("Enter a password: ")
    if random_password(user_pw) == True:
        print("Your password is good.")
    elif random_password(user_pw) == False:
        print("Your password is not good, it needs to be at least 8 characters long and contain at least one uppercase letter, at least one lowercase letter and at least one number.")

if __name__ == '__main__':
    main()      

    