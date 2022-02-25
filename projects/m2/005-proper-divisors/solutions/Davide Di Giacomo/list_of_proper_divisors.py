#function to define proper divisors
def divisors(number):
    proper_divisors=[1]
    for i in range(2, number):
        divisor=number%i
        if divisor == 0:
            proper_divisors.append(i)
    print(proper_divisors)
    
def main():
    number=int(input("Insert a number to determinate the proper divisors: "))
    divisors(number)
    
if __name__ == "__main__":
    main()