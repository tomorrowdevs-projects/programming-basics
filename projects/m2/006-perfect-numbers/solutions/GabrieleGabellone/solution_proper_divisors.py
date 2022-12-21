def proper_divisors(integer):
    """Takes an integer, returns the list of its divisors."""
    if not type(integer) == int:
        if integer.isnumeric():
            integer = int(integer)
        else:
            return print("You must enter a positive integer!")
    if integer == 0:
        return print("0 has infinitely many divisors")

    temp_set = set()
    divisor = 1

    while divisor not in temp_set and divisor <= integer:
        if integer % divisor == 0:
            quotient = integer // divisor
            temp_set.add(quotient)
            temp_set.add(divisor)
        divisor += 1

    list_of_divisors = list(temp_set)
    list_of_divisors.sort()
    return list_of_divisors


if __name__ == "__main__":
    n = input("Enter a number: ")
    divisors = proper_divisors(n)
    if divisors:
        print("Divisors of {}: {}".format(n, divisors))