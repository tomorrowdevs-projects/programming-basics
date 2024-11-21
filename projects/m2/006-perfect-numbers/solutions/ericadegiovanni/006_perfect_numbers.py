
def is_perfect_number(n):

    # is perfect number if the sum of all of the proper divisors of n is equal to n. 
    # return true if a given positive integer n is perfect else false
    proper_divisors_arr = [i for i in range(1, n) if n % i == 0 ]
    if sum(proper_divisors_arr) == n:
        return True
    else:
        return False

# write a main program that identify and display all of the perfect numbers between 1 and 10,000.
def main():
    for i in range (1, 10001):
        if is_perfect_number(i):
            print(i)

if __name__ == '__main__':
    main()
