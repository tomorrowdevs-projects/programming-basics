from solution_proper_divisors import proper_divisors

def is_perfect(n):
    """Takes a number n, returns true if it's a perfect number."""
    divisors = proper_divisors(n)
    del divisors[-1]
    if sum(divisors) == n:
        return True

def main():
    print("Perfect numbers from 1 to 10000:")
    for number in range(1,10001):
        if is_perfect(number): 
            print(number)
        
if __name__ == "__main__":
    main() 