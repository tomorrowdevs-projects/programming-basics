def proper_divisor(n):
    proper_divisors = []
    for div in range(1, n):
        if n % div == 0:
            proper_divisors.append(div)
    return proper_divisors

def perfect_numbers(n):
    proper_div_list = proper_divisor(n)
    number = 0
    for d in proper_div_list:
        number += d
    if number == n:
        return True
    else:
        return False


if __name__ == "__main__":
    for n in range(1, 10001):
        if perfect_numbers(n):
            print(n)

    