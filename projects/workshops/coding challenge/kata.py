'''
Given three arrays of integers, return the sum of elements that are common in all three arrays.

For example:

common([1,2,3],[5,3,2],[7,3,2]) = 5 because 2 & 3 are common in all 3 arrays
common([1,2,2,3],[5,3,2,2],[7,3,2,2]) = 7 because 2,2 & 3 are common in the 3 arrays

More examples in the test cases.

Good luck!

'''

def common(array1, array2, array3):

    sum = 0
    array1.sort()
    array2.sort()
    array3.sort()

    while True:
        if array1[0] == array2[0] == array3[0]:
            sum += array1[0]
            array1.pop(0)
            array2.pop(0)
            array3.pop(0)
        elif array1[0] <= array2[0] and array1[0] <= array3[0]:
            array1.pop(0)
        elif array2[0] <= array1[0] and array2[0] <= array3[0]:
            array2.pop(0)
        elif array3[0] <= array1[0] and array3[0] <= array2[0]:
            array3.pop(0)
        
        if len(array1) == 0 or len(array2) == 0 or len(array3) == 0:
            break
    
    return sum


print(common([1,2,3],[5,3,2],[7,3,2]))
print(common([1,2,2,3],[5,3,2,2],[7,3,2,2]))