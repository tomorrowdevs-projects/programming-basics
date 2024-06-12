#! /usr/bin/env python

''' Calculate binomial coefficient xCy = x! / (y! (x-y)!)
'''

from math import factorial as fac


def binomial(x, y):
    try:
        binom = fac(x) // fac(y) // fac(x - y)
    except ValueError:
        binom = 0
    return binom


#Print Pascal's triangle to test binomial()
def pascal(m):
    for x in range(m + 1):
        print([binomial(x, y) for y in range(x + 1)])


def main():
    x = int(input("Enter a value for x: "))
    y = int(input("Enter a value for y: "))
    print(binomial(x, y))


if __name__ == '__main__':
    main()