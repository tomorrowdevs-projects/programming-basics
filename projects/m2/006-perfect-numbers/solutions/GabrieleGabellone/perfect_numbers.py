def remove_duplicates(original_list):
    """Takes a list of values, returns a new list without duplicates."""
    new_list = []
    for values in original_list:
        if values not in new_list:
            new_list.append(values)
    return (new_list)

def proper_divisors(integer):
    """Takes an integer, returns the list of its divisors."""
    temp_list = []
    divisor = 1
    if integer > 1:
        while divisor not in temp_list:
            if integer % divisor == 0:
                quotient = integer // divisor
                temp_list.append(quotient)
                temp_list.append(divisor)
            divisor += 1
        temp_list.sort()
        list_of_divisors = remove_duplicates(temp_list)
    elif integer == 1: list_of_divisors = [1]
    return (list_of_divisors)

def is_perfect(n):
    """Takes a number n, returns true if it's a perfect number."""
    divisors = proper_divisors(n)[:]
    del divisors[-1]
    if sum(divisors) == n:
        return(True)
    else: return(False)

def main():
    print("Perfect numbers from 1 to 10000:")
    for number in range(1,10001):
        if is_perfect(number) == True: print(number)
        
if __name__ == "__main__":
    main() 