def proper_divisors(integer):
    """Takes an integer, returns the list of its divisors."""
    if integer.isnumeric() == False:
        print("You must enter a positive integer!")
        return False
    integer = int(integer)
    temp_set = set()
    divisor = 1
    while divisor not in temp_set:
        if integer % divisor == 0:
            quotient = integer // divisor
            temp_set.add(quotient)
            temp_set.add(divisor)
        divisor += 1
    list_of_divisors = list(temp_set)
    list_of_divisors.sort()
    del list_of_divisors[-1]
    return list_of_divisors

def main():
    n = input("Enter a number: ")
    if proper_divisors(n):
        divisors = proper_divisors(n)
        print("Divisors of {}: {}".format(n, divisors))

if __name__ == "__main__":
    main() 