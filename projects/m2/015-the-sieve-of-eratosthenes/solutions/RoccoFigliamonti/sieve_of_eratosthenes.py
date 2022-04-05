"""Set *p* equal to 2
While *p* is less than the limit do
    Cross out all multiples of *p* (but not *p* itself)
    Set *p* equal to the next number in the list that is not crossed out

Report all of the numbers that have not been crossed out as prime

The key to this algorithm is that it is relatively easy to cross out every nth number on a piece of paper. This is also an easy task for a computer—a for loop can simulate this behavior when a third parameter is provided to the *range* function. 

When a number is crossed out, we know that it is no longer prime, but it still occupies space on the piece of paper, and must still be considered when computing later prime numbers. As a result, you should not simulate crossing out a number by removing it from the list. Instead, you should simulate crossing out a number by replacing it with 0. Then, once the algorithm completes, all of the non-zero values in the list are prime.
"""

# version with 0
def primes(n): 
    q = 2
    lst = [x for x in range(n+1)]
    new_lst = []
    while q < (n+1):
        for i in range(q*q, n+1, q):
            lst[i] = 0
        q += 1
    for i in lst:
        if i>1:
            new_lst.append(lst[i])
    return new_lst


def primes_nozero(n):
    lst = []
    multiples = set()
    for q in range(2, n+1):
        if q not in multiples:
            lst.append(q)
            multiples.update(range(q*q, n+1, q))
    return lst


print(primes(100))
print(primes_nozero(100))