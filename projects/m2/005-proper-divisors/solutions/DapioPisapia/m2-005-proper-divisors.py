
def divisors_finder(n):
    divs = []
    for d in range(1, n):
        if n % d == 0:
            divs.append(d)
    return divs

def main():
    n = int(input("Enter here your number: "))
    if n > 0:
        print(divisors_finder(n))
    else:
        print("The integer must be greater than zero")

if __name__ == "__main__":
    main()
