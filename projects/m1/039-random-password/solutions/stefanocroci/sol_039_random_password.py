import random
def password():
    psw = ''
    while len(psw) < random.randint(7, 10):
        value = chr(random.randint(33, 126))
        psw += value
    return psw

def main():
    print(password())

main()