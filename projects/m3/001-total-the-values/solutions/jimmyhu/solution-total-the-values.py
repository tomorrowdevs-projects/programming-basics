def calc():
    num = input('Test: ')
    if num == ' ' or num == '':
        return 0
    else:
        return int(num) + calc()


def main():
    print(calc())

if __name__ == '__main__':
    main() 
