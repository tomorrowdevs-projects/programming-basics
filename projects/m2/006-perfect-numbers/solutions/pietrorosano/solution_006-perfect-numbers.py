# An integer, n, is said to be perfect when the sum of all of the proper divisors of n is equal to n.
# For example, 28 is a perfect number because its proper divisors are 1, 2, 4, 7 and 14, and 1 + 2 + 4 + 7 + 14 = 28.
# Write a function that determines whether or not a positive integer is perfect. Your function will take one parameter.
# If that parameter is a perfect number then your function will return True. Otherwise it will return False.
# In addition, write a main program that uses your function to identify and display
# all of the perfect numbers between 1 and 10,000.

print("\nEnter an integer to find if it's a perfect number:")
user_input = int(input())

def perfectNumber(i):
    divisors = []
    counter = 1
    while counter < i:
        if i % counter == 0:
            divisors.append(counter)
            counter += 1
        else:
            counter += 1
    if i == sum(divisors):
        return True
    else:
        return False

print(perfectNumber(user_input))

tenThousand = []
for n in range(1, 10001):
    tenThousand.append(n)

for num in tenThousand:
    if perfectNumber(num) == True:
        print(num)