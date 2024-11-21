
def list_flatten(l):

    '''
    Write a function that implements the recursive flattening algorithm. 
    Your function will take one argument, which is the list to flatten, and it will return 
    one result, which is the flattened list. 
    '''

    if l == []:
        return []
    if isinstance(l[0], list):
        return list_flatten(l[0]) + list_flatten(l[1:])
    else:
        return [l[0]] + list_flatten(l[1:])
        

print(list_flatten([1, [2, 3], [4, [5, [6, 7]]], [[[8], 9], [10]]]))
print(list_flatten([1,2,3,[4]]))
print(list_flatten([[1, 2, 3], [4, 5, 6], [7, [8], 9]]))