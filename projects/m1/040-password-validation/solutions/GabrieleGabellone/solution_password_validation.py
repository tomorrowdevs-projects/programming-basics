# The function password_validation determines whether or not a password is good.
# A valid password must contain at least 8 characters, at least one uppercase letter, at least one lowercase letter and at least one number.
def password_validation(password):
    if len(password) >= 8:
        for character in password:
            if character.islower():
                for character in password:
                    if character.isupper():
                        for character in password:
                            if character.isnumeric():
                                return(True)
        return(False)
    else: return(False)

def main():
    user_password = input("Enter a password: ")
    if password_validation(user_password) == True:
        print("The entered password is valid")
    else: print ("The entered password is not valid")

if __name__ == "__main__":
    main()