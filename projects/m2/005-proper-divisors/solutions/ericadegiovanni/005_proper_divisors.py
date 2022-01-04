

def proper_divisors_list(n):

    # recieve a positive integer n
    # return a list of positive integers less than n which divide evenly into n.   
    proper_divisors = []
    for i in range(1, n):
        if n % i == 0:
            proper_divisors.append(i)

    return proper_divisors

def main():

   # read a value from the user and display the list of its proper divisors.
    n = int(input('Insert a positive integer: '))
    print(proper_divisors_list(n))

if __name__ == '__main__':
    main()