def recursive_decimal_to_binary(number):
    r = number % 2
    number //= 2
    if number == 0:
        return r
    return str(f'{recursive_decimal_to_binary(number)}') + str(r)

def main():
    while True:
        number = input('Enter decimal number to convert it in binary number: ')
        if number == '':
            break
        elif int(number) < 0:
            print('ERROR: enter a non-negative integer!')
        else:
            print(recursive_decimal_to_binary(int(number)))

if __name__ == "__main__":     
    main()