def proper_divisors(n):
    proper_divisor = []
    for counter in range(1, n):
        if n % counter == 0:
            proper_divisor.append(counter)
    return proper_divisor

def main():
    while True:
        n = int(input("Enter a positive number:"))
        if n > 0:
            print(proper_divisors(n))
        else:
            print("goodbye")
            break

if __name__ in "__main__":
    main()
