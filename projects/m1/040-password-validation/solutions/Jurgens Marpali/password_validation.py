def psw_validation(psw):
    val = True
    if len(psw) < 8:
        print("YOur password should be at least 8 character long!")
        val = False

    if not any(char.isdigit() for char in psw):
        print("YOur password should have at least one number")
        val = False
    
    if not any(char.isupper() for char in psw):
        print("Your passowrd should have at least one uppercase letter")
        val = False
    
    if not any(char.islower() for char in psw):
        print("Your passowrd should have at least one lowercase letter")
        val = False
    if val:
        return val

def main():
    psw = input("Write your password here:")
    if (psw_validation(psw)):
         print("Valid Password")
    else:
        print("Invalid password")

if __name__ in "__main__":
    main()