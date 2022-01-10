import random

def random_psw():
    psw = ""
    for n in range(random.randint(7, 10)):
        psw += chr(random.randint(33, 126))
    return psw

if __name__ in "__main__":
    print(random_psw())