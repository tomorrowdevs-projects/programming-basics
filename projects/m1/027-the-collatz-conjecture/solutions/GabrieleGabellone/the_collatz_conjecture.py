# The Collatz Conjecture
# this program reads an integer n from the user and through the Collatz Conjecture creates a sequence starting with n and ending with one.
# It allows the user to continue entering new n values (continuing to display the sequences) until the user enters a value for n that is less than or equal to zero.
while True:
    n = int(input("Enter a positive integer n to calculate the sequence (n <= 0 to exit): "))
    if n <= 0: break
    sequence = []
    last_term = n
    while last_term != 1:
        sequence.append(last_term)
        if last_term % 2 == 0: last_term = last_term // 2
        else: last_term = last_term * 3 + 1
    sequence.append(1)
    print(sequence)
