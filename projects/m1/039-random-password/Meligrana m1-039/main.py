import random
def random_password():
    password=''
    lunghezza=random.randint(7,10)
    for c in range(lunghezza):
        password+=chr(random.randint(33,126))
    return password
if __name__=='__main__':
    p=random_password()
    print("password ",p)
