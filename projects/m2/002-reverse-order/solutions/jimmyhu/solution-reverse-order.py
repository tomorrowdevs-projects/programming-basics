def main():
    numbers = []
    while True:
        number = int(input('Enter a number: '))
        if number == 0:
            break
        else:
            numbers.append(number)
    sorted_numbers= sorted(numbers, reverse=True)
    for element in sorted_numbers:
        print(element)
if __name__ == '__main__':
    main() 