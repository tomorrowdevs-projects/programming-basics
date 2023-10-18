'''
Given three arrays of integers, return the sum of elements that are common in all three arrays.

For example:

common([1,2,3],[5,3,2],[7,3,2]) = 5 because 2 & 3 are common in all 3 arrays
common([1,2,2,3],[5,3,2,2],[7,3,2,2]) = 7 because 2,2 & 3 are common in the 3 arrays

More examples in the test cases.

Good luck!

'''

def common(a, b, c):
    
    sum = 0
    # sort arrays to have at position 0 lower number
    a.sort()
    b.sort()
    c.sort()

    # check if in position 0 we have the same number in all three arrays and sum it, 
    # otherwise we pop the lower number from his array
    while True:
        if a[0] == b[0] == c[0]:
            sum += a[0]
            a.pop(0)
            b.pop(0)
            c.pop(0)
        elif a[0] <= b[0] and a[0] <= c[0]:
            a.pop(0)
        elif b[0] <= a[0] and b[0] <= c[0]:
            b.pop(0)
        elif c[0] <= a[0] and c[0] <= b[0]:
            c.pop(0)
            
        # when we reach at least one array without number exit    
        if len(a) == 0 or len(b) == 0 or len(c) == 0:
            break
    
    return sum