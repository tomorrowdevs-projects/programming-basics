def proper_divisors(n):
    proper_divisor = []
    for counter in range(1, n):
        if n % counter == 0:
            proper_divisor.append(counter)
    return proper_divisor

def perfect_numbers(n):
    proper_i_list = proper_divisors(n)
    num = 0
    for i in proper_i_list:
        num += i
    if num == n:
        return True
    else:
        return False

def main():
    for n in range(1, 10001):
        if perfect_numbers(n):
            print(n)

if __name__ in "__main__":
    main()
