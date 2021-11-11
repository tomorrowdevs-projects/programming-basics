def list_prime(num):
    """
    This function take a limit number as parameter, lists all 
    number from 0 to limit and return a list with only prime
    numbers.
    """
    p = 2
    number_list = []
    prime_list = []
    for i in range(0, num+1):
        number_list.append(i)
    while p < num:
        # Starting at p*p improve the speed of the for loop because it doesn't
        # need to restart from the first item of the list every time.
        for x in range(p*p, num+1, p):
            number_list[x] = 0
        p += 1
    for prime in number_list:
        if 1 < prime:
            prime_list.append(prime)
        else:
            continue
    return prime_list


if __name__ == "__main__":
    limit_num = int(input("Enter the limit number: "))
    print(f"{list_prime(limit_num)}")