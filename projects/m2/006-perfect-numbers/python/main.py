def perfect_number(n):
    divisors = []
    if n > 0:
        for i in range(1,n):
            if n % i == 0:
                divisors.append(i)
        if sum(divisors) == n:
            return True
        else:
            return False
    
def main():    # main function that displays all of the perfect numbers between 1 and 10000
    for n in range(1,10000):
        if perfect_number(n) is True:
            print(n)

if __name__ == "__main__":
    main()
