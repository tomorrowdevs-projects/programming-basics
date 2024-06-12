"""Initialize factor to 2
**While** factor is less than or equal to n do
    **If** n is evenly divisible by factor **then** 
        Conclude that factor is a factor of n 
        Divide n by factor using floor division
    **Else**
        Increase factor by 1

Write a program that reads an integer from the user. If the value entered by the user is less than 2 then your program should display an appropriate error message. Otherwise your program should display the prime numbers that can be multiplied together to compute n, with one factor appearing on each line. For example:"""

prime = []
factor = 2
number = int(input("Please type a number: "))

if number<2:
    print("The number should be greater than 1")
while factor <= number:
    if number % factor == 0:
        prime.append(factor)
        number = number//factor
    else:
        factor += 1
print(prime)
        