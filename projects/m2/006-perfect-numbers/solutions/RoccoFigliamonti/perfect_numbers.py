"""An integer, *n*, is said to be perfect when the sum of all of the proper divisors of *n* is equal to *n*. 
For example, 28 is a perfect number because its proper divisors are 1, 2, 4, 7 and 14, and 1 + 2 + 4 + 7 + 14 = 28.
Write a function that determines whether or not a positive integer is perfect. 
Your function will take one parameter. If that parameter is a perfect number then your function will return True. 
Otherwise it will return False. 
In addition, write a main program that uses your function to identify and display all of the perfect numbers between 1 and 10,000.
"""


def proper_divisor(num):
    lst = []
    num = int(num)
    for i in range (num-1,0,-1):
        if num % i == 0:
            lst.append(i)
    return lst



def perfect_number(num):
    num = int(num)
    lst = proper_divisor(num)
    if sum(lst)==num:
        return True
    else:
        return False



lst = []
for i in range(1,10001):
    if perfect_number(i):
        lst.append(i)
print(lst)