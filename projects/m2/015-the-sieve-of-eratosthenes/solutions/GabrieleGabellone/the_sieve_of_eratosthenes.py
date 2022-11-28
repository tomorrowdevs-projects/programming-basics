def list_of_primes(limit):
    """Takes a limit number, returns a list of prime numbers between 2 and this limit number."""
    all_numbers = list(range(2,limit + 1))
    prime = []
    p = 2
    while p < limit:
        if p in all_numbers:
            for number in range(p,limit+1,p):
                if number != p and number in all_numbers:
                    all_numbers[all_numbers.index(number)] = 0
        p += 1
    for value in all_numbers:
        if value != 0: prime.append(value)
    return(prime)

def main():
    limit_number = int(input("Enter a limit number: "))
    prime_numbers = list_of_primes(limit_number)
    print ("Prime numbers between 2 and {}:\n{}".format(limit_number, prime_numbers))

if __name__ == "__main__":
    main()