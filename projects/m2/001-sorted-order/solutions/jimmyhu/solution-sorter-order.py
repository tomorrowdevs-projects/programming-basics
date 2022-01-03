
def main():
    numbers = []
    while True:
        number = int(input('Enter a number: '))
        if number == 0:
            break
        else:
            numbers.append(number)
    numbers.sort()
    for element in numbers:
        print(element)
if __name__ == '__main__':
    main()