def validator(p):
    if len(p) >= 8:
        number, upper, lower = False , False, False
        for ch in p:
            if 48 <= ord(ch) <= 57:
                number = True
            if 65 <= ord(ch) <= 90:
                upper = True
            if 97 <= ord(ch) <= 122:
                lower = True
            if number and upper and lower :
               return True
        else:
            return False
    

if __name__ == "__main__":
    p = input("Enter you password: ")
    result = "good" if validator(p) else "not good"
    print(f"Your password is {result}")
