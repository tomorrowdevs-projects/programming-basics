import random


def generate_password():
    password = ""
    for i in range(0, random.randint(7, 10)):
        password += chr(random.randint(33, 126))
    return password
    
if __name__== "__main__":
    print(generate_password())