def proper_div(num):
    dividers = []
    for n in range(1,num):
        if num % n == 0:
            dividers.append(n)
    return dividers


def main():
    selected = int(input('Enter a number: '))
    print(proper_div(selected))

if __name__ == '__main__':
    main()