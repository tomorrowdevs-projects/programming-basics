"""The following recursive algorithm can be used to flatten a list named data:

    If data is empty then Return the empty list
    If the first element in data is a list then
        Set l1 to the result of flattening the first element in data
        Set l2 to the result of flattening all of the elements in data, except the first
        Return the concatenation of l1 and l2
    If the first element in data is not a list then
        Set l1 to a list containing only the first element in data
        Set l2 to the result of flattening all of the elements in data, except the first Return the concatenation of l1 and l2

Write a function that implements the recursive flattening algorithm described previously. 

Your function will take one argument, which is the list to flatten, and it will return one result, which is the flattened list. 
"""

def flatten_list(lst):
    if len(lst) == 0:
        return lst

    if type(lst[0]) == list:
        l1 = flatten_list(lst[0])
        l2 = flatten_list(lst[1:])
        return l1 + l2
    else:
        l1 = [lst[0]]
        l2 = flatten_list(lst[1:])
        return l1 + l2

print(flatten_list([1, [2, 3], [4, [5, [6, 7]]], [[[8], 9], [10]]]))
