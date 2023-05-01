from random import randint


def password():
    s = ""
    length = randint(7, 10)
    for i in range(length):
        number = randint(33, 126)
        s += chr(number)
    return s


if __name__ == '__main__':
    print(password())
