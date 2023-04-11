from math import floor


def taxi(km):
    return 4.00 + 0.25 * floor(km/0.14)


if __name__ == '__main__':
    n = float(input("Enter the number of km travelled: "))
    price = taxi(n)
    print(f"The total price for {n} km is {price}")
