# The Collatz Conjecture

# Consider a sequence of integers that is constructed in the following manner:

# Start with any positive integer as the only term in the sequence
#     **While** the last term in the sequence is not equal to 1 **do**
#         **If** the last term is even **then**
#            Add another term to the sequence by dividing the last term by 2 using floor division
#         **Else**
#             Add another term to the sequence by multiplying the last term by 3 and adding 1

# The Collatz conjecture states that this sequence will eventually end with one
# when it begins with any positive integer.
# Although this conjecture has never been proved, it appears to be true.
# Create a program that reads an integer, n, from the user and reports all of the values in the sequence 
# starting with n and ending with one. 
# Your program should allow the user to continue entering new n values 
# (and your program should continue displaying the sequences) until the user enters a 
# value for n that is less than or equal to zero.

# *The Collatz conjecture is an example of an open problem in mathematics. 
# While many people have tried to prove that it is true, no one has been able to do so. 
# Information on other open problems in mathematics can be found on the Internet.*


# Documentation

# For this project solution you may use:

# - Variables, expressions, statements
# - Conditionals and recursion
# - Iteration
# - Strings

# Deadline

# This project requires to be completed in a maximum of **2 hours**


def collatz(n):
    sequence = [n]
    if n % 2 == 0:
        sequence.append(int(n / 2))
    else:
        sequence.append(int(n * 3 + 1))
    while sequence[-1] != 1:
        last = sequence[-1]
        if last % 2 == 0:
            result = int(last/2)
        else:
            result = int(last*3+1)
        sequence.append(result)

    return sequence


def main():
    user_n = int(input("Enter the first number of the sequence: "))
    print(collatz(user_n))
    out_sequence = collatz(user_n)
    while True:
        out_n = int(input("Keep your string going: "))
        out_sequence.append(out_n)
        print(out_sequence)
        if out_n == 0:
            break


if __name__ == '__main__':
    main()
