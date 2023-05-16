def sum_of_divisors(number):
    return sum([x for x in range(1, number) if number % x == 0])


def perfect_number(number):
    return number == sum_of_divisors(number)


if __name__ == '__main__':
    print("Perfect numbers between 1 and 10000 are: ")
    for n in range(1, 10000):
        if perfect_number(n):
            print(n)