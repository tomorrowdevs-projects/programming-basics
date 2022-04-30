
def validation(password):
    if len(password) >= 8 and password != password.upper() and password != password.lower():
        for char in password:
            if char.isdigit():
                return True
            else:
                pass
        return False
    else:
        return False

if __name__ == "__main__":
    password = input("Digit your password:")
    if validation(password):
        print("Your password is good :)")
    else:
        print("Your password is bad :(")
