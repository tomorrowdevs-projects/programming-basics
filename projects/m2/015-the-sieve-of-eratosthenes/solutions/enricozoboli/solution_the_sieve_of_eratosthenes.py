import math
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

def check_prime(p):
    checked_list = []
    for d in p:
        for n in range(2, int(math.sqrt(d))+3):
            if d % n != 0 and d not in checked_list:
                checked_list.append(d)
    if checked_list == p:
        return True
    return False
                    
if __name__ == "__main__":
    limit_num = int(input("Enter a number: "))
    unchecked_result = list_prime(limit_num)
    print(unchecked_result)
    if check_prime(list_prime(limit_num)):
        print("All numbers are prime")
