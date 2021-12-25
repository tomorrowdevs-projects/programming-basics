import random
def passwordgen():
    password = []
    lenght = random.randint(7,10)
    while len(password) < lenght:
        select = random.randint(33,126)
        newletter = chr(select)
        password.append(newletter)
    return ''.join(password)

def main():
    print(passwordgen())

if __name__ == '__main__':
    main()