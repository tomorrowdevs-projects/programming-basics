def validation(passsword):
    if len(password) >= 8:
        number, upper, lower = False , False, False
        for character in password:
            if 48 <= ord(character) <= 57:
                number = True
            if 65 <= ord(character) <= 90:
                upper = True
            if 97 <= ord(character) <= 122:
                lower = True
            if number and upper and lower :
               return True
        else:
            return False

def main():
    while True:
        global password
        password = input("Enter you password: ")
        if password=="":
            break
        else:
            if validation(password)==True:
                print ("Your password is correct")
            else:
                print ("Your password is uncorrect")
                continue

if __name__ == "__main__":
    main()
         