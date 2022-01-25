
password=str(input("Please enter password: "))

def validation (password):
    flag1=flag2=0
    #flag2=0
    if len(password)>=8:
        for i in range(len(password)):
            if ord(password[i]) in range(65,91):
                flag1=1
            if ord(password[i]) in range(48,57):
                flag2=1
          
    else:
        print("Password must be >= 8 characters")

    if flag2 == 1 and flag1 == 1:
        print("password valid")
        return True
    else:
        print("password is not valid")
        return False




validation(password)