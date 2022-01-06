def perfect_num(num):
    dividers = []
    for n in range(1,num):
        if num % n == 0:
            dividers.append(num)
    if sum(dividers) == num:
        return True
    else:
        return False

def main():
    number = int(input('Enter the number: '))
    print('The number is a perfect number!' if perfect_num(number) else 'The number is not a perfect number!')
    perfect_numbers = []
    for i in range(1,10000):
        if perfect_num(i):
            perfect_numbers.append(i)
    print(perfect_numbers)

if __name__ == '__main__':
    main()