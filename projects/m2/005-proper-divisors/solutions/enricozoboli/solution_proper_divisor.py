def proper_divisor(n):
    proper_divisors = []
    for div in range(1, n):
        if n % div == 0:
            proper_divisors.append(div)
    return proper_divisors

def main():
    while True:
        n = int(input("Enter a positive number: "))
        if n <= 0:
            print("Only positive number are allowed.")
            continue
        else:
            return print(proper_divisor(n))


if __name__ == "__main__":
    main()
