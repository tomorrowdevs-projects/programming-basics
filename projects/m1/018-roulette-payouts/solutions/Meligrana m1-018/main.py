import random

if __name__ == '__main__':
    a=random.randint(0,37)
    if a==37:
        print(f"paga 00\n")
    elif a==0:
        print(f"paga 0\n")
    else:
        print(f"paga {a}\n")
        if a in [1,3,5,7,9,12,14,16,18,19,21,23,25,27,30,32,34,36]:
            print(f"paga rosso\n")
        else:
            print(f"paga nero\n")
        if 1<=a<=18:
            print(f"paga da 1 a 18\n")
        else:
            print(f"paga da 19 a 36\n")
        if a%2==0:
            print(f"paga pari")
        else:
            print(f"paga dispari")