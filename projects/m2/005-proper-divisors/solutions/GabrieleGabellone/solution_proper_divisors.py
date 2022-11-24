def remove_duplicates(original_list):
    """Takes a list of values, returns a new list without duplicates."""
    new_list = []
    for values in original_list:
        if values not in new_list:
            new_list.append(values)
    return (new_list)

def proper_divisors(integer):
    """Takes an integer, returns the list of its divisors."""
    if integer.isnumeric() == False:
        print ("You must enter a positive integer!")
        return (False)
    else: integer = int(integer)
    temp_list = []
    divisor = 1
    while divisor not in temp_list:
        if integer % divisor == 0:
            quotient = integer // divisor
            temp_list.append(quotient)
            temp_list.append(divisor)
        divisor += 1
    temp_list.sort()
    list_of_divisors = remove_duplicates(temp_list)
    del list_of_divisors[-1]
    return (list_of_divisors)

def main():
    n = input("Enter a number: ")
    if proper_divisors(n) != False:
        divisors = proper_divisors(n)
        print ("Divisors of {}: {}".format(n, divisors))

if __name__ == "__main__":
    main() 