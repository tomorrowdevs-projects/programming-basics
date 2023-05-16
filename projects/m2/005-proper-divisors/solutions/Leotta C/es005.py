def list_of_divisors(number):
    return [x for x in range(1, number) if number % x == 0]


if __name__ == '__main__':
    n = int(input("Enter a value: "))
    print(list_of_divisors(n))
    print(sum(list_of_divisors(n)))
