import string
numbers=["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]
alphabet_lower = []
alphabet_upper = []
alphabet_lower = list(string.ascii_lowercase)
alphabet_upper = list(string.ascii_uppercase)
def validation(password):
    if len(password)>=8:
        for i in alphabet_lower:
            if 0<=password.find(i)<=len(password):
                for i in alphabet_upper:
                    if 0<=password.find(i)<=len(password):
                        for i in numbers:
                            if 0<=password.find(i)<=len(password):
                                return True
                        else:
                            return False
                else:
                    return False
        else:
            return False
    else:
        return False

if __name__ == '__main__':
    password=(str(input("Insert a valid password: ")))
    valid = "valid" if validation(password) else "not valid"
    print(f"Your password is {valid}!")